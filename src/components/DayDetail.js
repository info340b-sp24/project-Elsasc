'use strict';

import React, { createElement, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { BrowserRouter, Routes, Route, Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';

export function DayDetails(props) {
  return (
    <html lang="en">
      <TimelineHead />
      <TimelineBody />
    </html>
  );
}

function TimelineHead(props) {
  return (
    <head>
      <meta charSet="utf-8"/>
      <meta name="author" content="Cole Elsasser, Brian Chiang, Vincent Li"/>
      <meta name="description" content="Timeline page for user to customize"/>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
      <title>Timeline</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"/>
      <link rel="stylesheet" href="./index.css"/>

      <link rel="icon" type="image/x-icon" href="./img/space-needle-icon.png"/>
    </head>
  );
}

function TimelineBody(props) {
  return (
    <body className='timeline_body'>
      <MainComponents />
    </body>
  )
};

function MainComponents(props) {
  return (
    <main className='timeline_main'>
      <DayManager />
      <Form />
      {/* <TimeEvents /> */}
    </main>
  );
}

function DayManager(props) {
  // const navigate = useNavigate();

  const params = useParams();

  const DayNumber = params.DayNumber;

  const current = parseInt(DayNumber);

  const [Days, setNewDays]= useState([1]);

  const [currentDay, setCurrentDay] = useState(current);

  const addNewDay = () => {
    const newDay = Days[Days.length-1] + 1;
    const newDays = Days.concat(newDay)
    console.log(newDays);
    setNewDays(newDays);
  }

  const handleDayClick = (event) => {
    setCurrentDay(event.target.value);
    console.log(currentDay);
    // navigate("/timeline");
  }

  const renderDays = Days.map((item) => {
    return (
      <li  key={item} value={item}><Link onClick={handleDayClick} to={"/timeline/Day" + item}>Day {item}</Link></li>
      // <Link onClick={handleDayClick} to={"/timeline/Day" + item}>Day {item}</Link>
    );
  })

  return (
    <div>
      <h1 className='timeline_title'>Timeline</h1>
      <button onClick={addNewDay} className='timeline_button' type="button">Add a New Day</button>
      <div className='scroller'>
        <ul className='Day-list scroller__inner'>
          {renderDays}
        </ul>
      </div>
      <h3 className='Day'>Day {currentDay}</h3>
    </div>
  );
}

function Form(props) {
  const [eventBox, setEventBox] = useState([]);

  const [typedTime, setTime] = useState("");

  const [typedTitle, setTitle] = useState("");

  const [typedEvent, setEvent] = useState("");

  const [timeButtonName, setTimeButtonName] = useState("All Times");

  const handleTitleChange = (event) => {
    const inputtedValue = event.target.value;
    setTitle(inputtedValue);
  }

  const handleEventChange = (event) => {
    const inputtedValue = event.target.value;
    setEvent(inputtedValue);
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitting", typedTime, typedTitle, typedEvent);

    console.log(eventBox);

    console.log(eventBox.length);
    if (eventBox.length % 2 === 0) {
      const newEventBox = {time: typedTime, title: typedTitle, description: typedEvent, onRight: true};
      setEventBox([...eventBox, newEventBox]);
    } else {
      const newEventBox = {time: typedTime, title: typedTitle, description: typedEvent, onRight: false};
      setEventBox([...eventBox, newEventBox]);
    }
    console.log(eventBox);

    setTime("");
    setTitle("");
    setEvent("");
  }

  const handleTimeFilterClick = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setTimeButtonName(event.target.value);
    setTime(event.target.value);
  }

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
      <form method="get" className='timeline_addevent' onSubmit={handleSubmit}>
        <div className='timeline_addevent'>
          <label>Time-Start: </label>
          <DropdownButton id="dropdown-item-button" variant="success" title={timeButtonName} className="m-1">
                {TimeOptions}
          </DropdownButton>
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
    </div>
  );
}
