'use strict';

import React, { createElement, useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom'
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';
import { render } from '@testing-library/react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ref, set as firebaseSet, getDatabase, onValue } from 'firebase/database';

export function Timeline(props) {
  return (
    <html lang="en">
      <TimelineHead />
      <TimelineBody currentUser={props.currentUser}/>
    </html>
  );
}

function TimelineHead(props) {
  return (
    <head>
      <meta charSet="utf-8" />
      <meta name="author" content="Cole Elsasser, Brian Chiang, Vincent Li" />
      <meta name="description" content="Timeline page for user to customize" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <title>Timeline</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
      <link rel="stylesheet" href="./index.css" />

      <link rel="icon" type="image/x-icon" href="./img/space-needle-icon.png" />
    </head>
  );
}

function TimelineBody(props) {
  return (
    <body className='timeline_body'>
      <MainComponents currentUser={props.currentUser}/>
    </body>
  )
};

function MainComponents(props) {
  const [Days, setNewDays]= useState([1]);

  const [currentDay, setCurrentDay] = useState(1);

  const addNewDay = () => {
    const newDay = Days.length + 1;
    const newDays = [...Days, newDay]
    console.log(newDays);
    setNewDays(newDays);
  }

  const handleDayClick = (event) => {
    console.log(event.target.value);
    setCurrentDay(event.target.value);
    console.log(Days);
  }
  
  return (
    <main className='timeline_main'>
      {/* <DayManager Days={Days} currentDay={currentDay}handleDayClickCallback={handleDayClick} addNewDayCallback={addNewDay}/> */}
      <EventForm currentUser={props.currentUser} currentDay={currentDay}/>
      {/* <TimeEvents /> */}
    </main>
  );
}

function DayManager(props) {
  
  const Days = props.Days;

  const renderDays = Days.map((day, index) => {
    return (
      <li key={day} value={day}><Link value={index} onClick={props.handleDayClickCallback} to={"/timeline/Day" + day}>Day {day}</Link></li>
      // <Link onClick={handleDayClick} to={"/timeline/Day" + item}>Day {item}</Link>
    );
  })

  return (
    <div>
      <h1 className='timeline_title'>Timeline</h1>
      <button onClick={props.addNewDayCallback} className='timeline_button' type="button">Add a New Day</button>
      <div className='scroller'>
        <ul className='Day-list scroller__inner'>
          {renderDays}
        </ul>
      </div>
    </div>
  );
}

function EventForm(props) {
  const currentDay = props.currentDay
  const currentUser = props.currentUser
  const [eventBox, setEventBox] = useState([]);

  const [typedTime, setTime] = useState("");

  const [typedTitle, setTitle] = useState("");

  const [typedEvent, setEvent] = useState("");

  const [timeButtonName, setTimeButtonName] = useState("All Times");

  const currentUserId= currentUser.userId 



  const handleTitleChange = (event) => {
    const inputtedValue = event.target.value;
    setTitle(inputtedValue);
  }

  const handleEventChange = (event) => {
    const inputtedValue = event.target.value;
    setEvent(inputtedValue);
  }

  const handleTimeFilterClick = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setTimeButtonName(event.target.value);
    setTime(event.target.value);
    console.log(currentUser.userName)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitting", typedTime, typedTitle, typedEvent);
    const newEventBox = [...eventBox, { time: typedTime, title: typedTitle, description: typedEvent, onRight: true }]

    console.log(newEventBox);

    console.log(newEventBox.length);
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
      .then(() => console.log("data saved successfully!"))
      .catch(err => console.log(err))
    }

    

    // const newEventBox = { time: typedTime, title: typedTitle, description: typedEvent, onRight: true };
    console.log(eventBox);



    // if (eventBox.length % 2 === 0) {
    //   const newEventBox = {time: typedTime, title: typedTitle, description: typedEvent, onRight: true};
    //   setEventBox([...eventBox, newEventBox]);
    // } else {
    //   const newEventBox = {time: typedTime, title: typedTitle, description: typedEvent, onRight: false};
    //   setEventBox([...eventBox, newEventBox]);
    // }
    // console.log(eventBox.sort((eventA, eventB) => eventA.time.localeCompare(eventB.time)));
    // console.log("Above");

    // Sort eventbox

    // setEventBox();

    // setTime("");
    // setTitle("");
    // setEvent("");
  }

  useEffect(() => {
    const db = getDatabase(); //"the database"
    
    // console.log(currentUserId)
    const currentUserId1 = String(currentUserId)
    const timelineRef = ref(db, "timeline");
    // const userEventsRef = ref(timelineRef, currentUserId1);
      

    //returns a function that will "unregister" (turn off) the listener
    // const unregisterFunction = onValue(timelineRef, (snapshot) => {
    //   const userEventsValue = snapshot.val()
    //   setEventBox(userEventsValue)

    // })

    const unregisterFunction = onValue(timelineRef, (snapshot) => {
      const timelineUserEvents = snapshot.val();
      if (timelineUserEvents){
      setEventBox(timelineUserEvents)
      }
    })

    //cleanup function for when component is removed
    function cleanup() {
      unregisterFunction(); //call the unregister function
    }
    return cleanup; //effect hook callback returns the cleanup function
  })


  const Times = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];

  const TimeOptions = Times.map((time, index) => {
    const TimeButtonItem = <Dropdown.Item as="button" variant="success" value={time + ":00"} key={time + ":00"} onClick={handleTimeFilterClick}>{time + ":00"}</Dropdown.Item>
    return TimeButtonItem;
  });

  const renderTimeline = eventBox.map((item, index) => {
    if (item.onRight === true) {
      return (
        <div className='timeline' key={index}>
          {TimeComponentRight(item.time)}
          <TimelineMiddle />
          {TimeEvent(item.title, item.description)}
        </div>
      );
    } else {
      return (
        <div className='timeline' key={index}>
          {TimeComponentLeft(item.time)}
          <TimelineMiddle />
          {TimeEvent(item.title, item.description)}
        </div>
      );
    }
  })

  return (
    <div>
      <h3 className='Day'> Timeline: What do you want to plan?</h3>
      <h4> Share the page link to your friends</h4>
      <form method="get" className='timeline_addevent' onSubmit={handleSubmit}>
        <div className='timeline_addevent'>
          <label>Time-Start: </label>
          <Form.Group>
          <DropdownButton id="dropdown-item-button" variant="success" title={timeButtonName} className="m-1">
                {TimeOptions}
          </DropdownButton>
          </Form.Group>


        </div>
        {/* <div className='timeline_addevent'>
          <label for="time-start">Time-Start: </label>
          <input onChange={handleTimeChange} type="text" name="time" id='time-start' required />
        </div> */}
        <div className='timeline_addevent'>
          <label for="title">Title: </label>
          <input onChange={handleTitleChange} type="text" name="title" id='title' required />
        </div>
        <div className='timeline_addevent'>
          <label for="discription">Description: </label>
          <input onChange={handleEventChange} type="text" name="discription" id='discription' required />
        </div>
        <div className='timeline_addevent'>
          <input type="submit" value="Add Event" />
          {/* <button type="submit" className="btn btn-primary">Add Event</button> */}
        </div>
      </form>
      {renderTimeline}
    </div>
  );
}

function TimeComponentRight(time) {
  return (
    <div className='timeline_components'>
      <div className='time time--right'>{time}</div>
    </div>
  );
}

function TimeComponentLeft(time) {
  return (
    <div className='timeline_components'>
      <div className='time'>{time}</div>
    </div>
  );
}

function TimelineMiddle(props) {
  return (
    <div className='timeline_middle'>
      <div className='timeline_point'></div>
    </div>
  );
}

function TimeEvent(title, description) {
  return (
    <div className='timeline_components timeline_components--bg'>
      <h2 className='time_title'>{title}</h2>
      <p className='time_event'>
        {description}
      </p>
      button
    </div>
  );
}

// function Footer(props) {
//   return (
//     <footer>
//       <p class="copy-right-notes"> Copyright &copy; Created by
//           <a href="elsascol@uw.edu">elsascol@uw.edu</a>
//           <a href="cch0223@uw.edu">cch0223@uw.edu</a>
//           <a href="zli2003@uw.edu">zli2003@uw.edu</a>. 2024
//       </p>
//     </footer>
//   );
// }
