'use strict';

import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';

let currentDay = 1;

let DaysAdded = [1];

export function Timeline(props) {
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
      <meta charset="utf-8"/>
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
      <Header />
      <MainComponents />
      <Footer />
    </body>
  )
};

function Header(props) {
  return (
    <header>
      <h1 className='my-0 py-0 bg-light'>Timeline - To Customize your Traveling Plan</h1>
      <NavBar />
    </header>
  );
}

function NavBar(props) {
  return (
    <nav className='navbar navbar-expand-lg bg-light navbar-light'>
      <div className='container-fluid'>
        <a className='navbar-brand' href="#">Seattle is FUN!</a>
        <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id="navbarNav">
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link active' aria-current="page" href="index.html">Home</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href="quiz.html">Quiz</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href="timeline.html">Timeline</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href="liked-locations.html">Liked Locations</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function MainComponents(props) {
  return (
    <main className='timeline_main'>
      <DayManager />
      <Form />
      <TimeEvents />
    </main>
  );
}

function DayManager(props) {
  return (
    <div>
      <h1 className='timeline_title'>Timeline</h1>
      <button className='timeline_button' type="button">Add a New Day</button>
      <Scroller />
      <h3 className='Day'>Day {currentDay}</h3>
    </div>
  );
}

function Scroller(props) {
  return (
    <div className='scroller'>
      <ul className='Day-list scroller__inner'>
        <li>Day {DaysAdded[0]}</li>
      </ul>
    </div>
  );
}


function Form(props) {
  return (
    <form method="get" className='timeline_addevent'>
      <div className='timeline_addevent'>
        <label for="time-start">Time-Start: </label>
        <input type="text" name="time" id='time-start' required />
      </div>
      <div className='timeline_addevent'>
        <label for="title">Title: </label>
        <input type="text" name="title" id='title' required />
      </div>
      <div className='timeline_addevent'>
        <label for="discription">Description: </label>
        <input type="text" name="discription" id='discription' required />
      </div>
      <div className='timeline_addevent'>
        <input type="submit" value="Add Event" />
      </div>
    </form>
  );
}

function TimeEvents(props) {
  return (
    <div className='timeline'>
      <TimeComponentRight />
      <TimelineMiddle />
      <TimeEvent />

      <TimeEvent />
       <TimelineMiddle />
       <TimeComponentLeft />

      <TimeComponentRight />
      <TimelineMiddle />
      <TimeEvent />

      <TimeEvent />
       <TimelineMiddle />
       <TimeComponentLeft />
    </div>
  );
}

function TimeComponentRight(props) {
  return (
    <div className='timeline_components'>
      <div className='time time--right'>9:00 AM</div>
    </div>
  );
}

function TimeComponentLeft(props) {
  return (
    <div className='timeline_components'>
      <div className='time'>9:00 AM</div>
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

function TimeEvent(props) {
  return (
    <div className='timeline_components timeline_components--bg'>
      <h2 className='time_title'>Event title</h2>
      <p className='time_event'>
        Descriptions of the event. The place to go. And place the location card in this place.
      </p>
    </div>
  );
}

function Footer(props) {
  return (
    <footer>
      <p class="copy-right-notes"> Copyright &copy; Created by
          <a href="elsascol@uw.edu">elsascol@uw.edu</a>
          <a href="cch0223@uw.edu">cch0223@uw.edu</a>
          <a href="zli2003@uw.edu">zli2003@uw.edu</a>. 2024
      </p>
    </footer>
  );
}
