'use strict';

import React, { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';
import Form from 'react-bootstrap/Form';
import { ref, set as firebaseSet, getDatabase, onValue, remove, get} from 'firebase/database';

export function Timeline(props) {
  return (
    <div>
      <div className='timeline_body'>
      <MainComponents currentUser={props.currentUser} />
    </div>
    </div>
  );
}

function MainComponents(props) {

  return (
    <main className='timeline_main'>
      <EventForm currentUser={props.currentUser} />
    </main>
  );
}


function EventForm(props) {
  const currentUser = props.currentUser
  const [eventBox, setEventBox] = useState([]);

  const [typedTime, setTime] = useState("");

  const [typedTitle, setTitle] = useState("");

  const [typedEvent, setEvent] = useState("");

  const [timeButtonName, setTimeButtonName] = useState("All Times");

  const [clearEvents, setClearEvents] = useState(false);


  const currentUserId = currentUser.userId


  const handleClearEvents = (event) => {
    event.preventDefault();
    // console.log("Clear Triggered");
    const db = getDatabase(); //"the database"
    const timelineRef = ref(db, "timeline");
      get(timelineRef, (snapshot) =>{
        snapshot.forEach((eventItem) => {
          remove(eventItem.ref);
        })
      })
      setEventBox([]);
  }

  const handleTitleChange = (event) => {
    event.preventDefault();
    const inputtedValue = event.target.value;
    setTitle(inputtedValue);
  }

  const handleEventChange = (event) => {
    event.preventDefault();
    const inputtedValue = event.target.value;
    setEvent(inputtedValue);
  }

  const handleTimeFilterClick = (event) => {
    event.preventDefault();
    setTimeButtonName(event.target.value);
    setTime(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newEventBox = [...eventBox, { time: typedTime, title: typedTitle, description: typedEvent, onRight: true }]

    // console.log(newEventBox);

    // console.log(newEventBox.length);
    const sortedEventbox = newEventBox;
    if (sortedEventbox.length > 0) {
      sortedEventbox.sort((eventA, eventB) => {

        if (eventA.time < eventB.time) {
          return -1;
        }
        if (eventA.time > eventB.time) {
          return 1;
        }

        return 0;
      });
      setEventBox(sortedEventbox);
      const db = getDatabase(); //"the database"
      const timelineRef = ref(db, "timeline");

      firebaseSet(timelineRef, sortedEventbox)
        .catch(err => console.log(err))
    }
  }

  useEffect(() => {
    const db = getDatabase(); //"the database"
    const timelineRef = ref(db, "timeline");

    const unregisterFunction = onValue(timelineRef, (snapshot) => {
      const timelineUserEvents = snapshot.val();
      if (timelineUserEvents !== null) {
        setEventBox(timelineUserEvents)
      }
    })

    //cleanup function for when component is removed
    function cleanup() {
      unregisterFunction(); //call the unregister function
    }
    return cleanup; //effect hook callback returns the cleanup function
  }, []);


  const Times = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];

  const TimeOptions = Times.map((time, index) => {
    const TimeButtonItem = <Dropdown.Item as="button" variant="success" value={time + ":00"} key={time + ":00"} onClick={handleTimeFilterClick}>{time + ":00"}</Dropdown.Item>
    return TimeButtonItem;
  });

  const renderTimeline = eventBox.map((item, index) => {
    return (
      <div className='timeline' key={index}>
        <div className='time'>{item.time}</div>
        <TimeComponent title={item.title} description={item.description}/>
      </div>
    );
  })

  return (
    <div>
      <h3 className='Day'> Timeline: What do you want to plan?</h3>
      <h4> Share the page link to your friends</h4>
      <form method="get" className='timeline_addevent' onSubmit={handleSubmit}>
        <div className='timeline_addevent'>
          <p >Time-Start: </p>
          <Form.Group>
            <DropdownButton id="dropdown-item-button" variant="success" title={timeButtonName} className="m-1">
              {TimeOptions}
            </DropdownButton>
          </Form.Group>
        </div>
        <div className='timeline_addevent'>
          <label htmlFor="title">Title: </label>
          <input onChange={handleTitleChange} type="text" name="title" id='title' required />
        </div>
        <div className='timeline_addevent'>
          <label htmlFor="discription">Description: </label>
          <input onChange={handleEventChange} type="text" name="discription" id='discription' required />
        </div>
        <div className='timeline_addevent'>
          <input type="submit" value="Add Event" />
        </div>
        <div className='hint'>(Hint: Select a specific time and edit your day plan's title and description,
          click <u>Add Event</u> to display in the timeline.)
        </div>
      </form>
      <div className='button my-3'>
        <input type="button" value="Clear Events" onClick={handleClearEvents} />
      </div>
      {renderTimeline}
    </div>
  );
}

function TimeComponent(props) {
  const title = props.title;
  const description = props.description;
  return (
    <div className='timeline_components'>
      <h2 className='time_title'>{title}</h2>
      <p className='time_event'>
        {description}
      </p>
    </div>
  );
}