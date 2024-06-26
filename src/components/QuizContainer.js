import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import tagDescriptions from '../data/TagDescriptions.json'

// JSON Quiz Questions (missing #4)
import QuizQuestions from '../data/QuizQuestions.json'
// NOTE: This const is also present in a json and functions however the image jsx will not
// Function in a json, this questionArray constant is present to display the img question (Q#4)
const questionArray = [

  // Question 1
  {
    QNum: 1,
    QTitle: 'If you could choose one place to live forever where would you live?',
    QAnswers: [
      { AnsText: "Dubai", AnsTag: "Shopping" },
      { AnsText: "A hut in the woods", AnsTag: "Outdoor" },
      { AnsText: "In an arcade", AnsTag: "Other" },
      { AnsText: "In an apartment overlooking the Eiffel Tower", AnsTag: "Sightseeing" }
    ]
  },
  // Question 2
  {
    QNum: 2,
    QTitle: "What's your idea of a perfect day?",
    QAnswers: [
      { AnsText: "Spending the day out shopping for all new souvenirs", AnsTag: "Shopping" },
      { AnsText: "Enjoying all the finest dining and three course meals I can", AnsTag: "Restaurant" },
      { AnsText: "Isolated and enjoying the beauty of nature", AnsTag: "Outdoor" },
      { AnsText: "Traveling to historic museums", AnsTag: "Sightseeing" }
    ]
  },
  // Question 3
  {
    QNum: 3,
    QTitle: 'Which of these describes you best?',
    QAnswers: [
      { AnsText: "I like to go to only the finest dining and shopping centers when I travel", AnsTag: "Expensive" },
      { AnsText: "I like to splurge on vacation but within reason", AnsTag: "Moderate" },
      { AnsText: "My favorite thing is to find a great deal", AnsTag: "Cheap" },
      { AnsText: "My motto is the more free the better the experience", AnsTag: "Free" }
    ]
  },
  // Question 4 
  {
    QNum: 4,
    QTitle: 'Which of these images appeals to you the most?',
    QAnswers: [
      { AnsText: <img src="./img/Snoqualmie_Falls.jpeg" className="quiz-img" alt="Snoqualmie Falls"></img>, AnsTag: "Sightseeing" },
      { AnsText: <img src="./img/bellevue_mall.jpg" className="quiz-img" alt="The Bellevue Square Mall"></img>, AnsTag: "Shopping" },
      { AnsText: <img src="./img/resteraunt.jpg" className="quiz-img" alt="Benihana Chef cooking"></img>, AnsTag: "Restaurant" },
      { AnsText: <img src="./img/Seattle_Museum.jpg" className="quiz-img" alt="The Seattle Art Museum"></img>, AnsTag: "Sightseeing" }
    ]
  },
  // Question 5 (Submit)
  {
    QNum: 5,
    QTitle: 'Would you like to submit?',
    QAnswers: [
      { AnsText: "Submit", AnsTag: "submit" },
    ]
  }
]


const taglist = [] // Global Variable to be used to track the tags
// Changes the question and records tag value from each point
function QuizQuestionList(props) {
  const quizQuestionJSON = props.quizQuestionsJSON;

  const [currentQ, setCurrentQ] = useState(0);

  const handleButtonClick = (event) => {
    if (event.target.value === 'submit') {
      const nextQ = currentQ + 1
      setCurrentQ(nextQ);
    }
    else {
      const nextQ = currentQ + 1
      setCurrentQ(nextQ);
      // Add tags for final calculation
      taglist.push(event.target.value)
    }
  }

  // console.log(taglist)

  if (currentQ === questionArray.length) {
    return (
      <QuizResult handleButtonClick={handleButtonClick} currentQ={currentQ} />
    );
  }
  else {
    return (
      <QuizQuestion handleButtonClick={handleButtonClick} currentQ={currentQ} />
    );
  }
}

function QuizQuestion(props) {
  const handleButtonClick = props.handleButtonClick;
  const currentQ = props.currentQ;

  const ansButtons = questionArray[currentQ].QAnswers.map((answer, index) =>
    <button key={index} className="btn btn-outline-primary me-3 my-3" type="button" onClick={handleButtonClick} value={answer.AnsTag} data-bs-toggle="button">{answer.AnsText}</button>)
    ;

  return (
    <div key={currentQ.QNum} className="card border border-dark rounded shadow-lg mb-4">
      <div className="card-title">
        <h3 className="fs-2 text-start"> {questionArray[currentQ].QNum + ". " + questionArray[currentQ].QTitle}</h3>
      </div>

      <div className="card-body">
        <div className="d-grid gap-2 px-2 d-md-block rounded text-center">
          {ansButtons}
        </div>
      </div>

    </div>
  );
}

function QuizResult(props) {
  const handleButtonClick = props.handleButtonClick;
  const currentQ = props.currentQ;
  const unqTaglist = [... new Set(taglist)];
  const reccTags = unqTaglist.map((tag) =>
    <p className="fs-4" key={tag}>{tag + ": " + tagDescriptions[tag]}</p>)

  return (
    <div key={currentQ.QNum} className="card border border-dark rounded shadow-lg mb-5 pd-0">
      <div className="card-title">
        <h3 className="fs-2 text-center"> Quiz Result</h3>
      </div>

      <div className="card-body">
        <div className="d-grid gap-2 px-2 d-md-block rounded">
          <p className="fs-3"> We would reccommend you look for the following tags that might appeal to you most</p>
          {reccTags}
        </div>
      </div>

    </div>);
}

export function QuizContainer(props) {
  return (
    <section className='quizContainer'>
      <div>
        <div className="d-flex  justify-content-center mx-5">
          <div className="container">
            <h2 className="text-start"> Quiz - What kind of traveler are you? </h2>
            <h3 className="text-start fs-5 pb-5"> Answer each question to find out what search tags might fit you best!</h3>
            <div className="row">
              <div className="col bg-auto justify-content-md-center">
                <QuizQuestionList quizQuestionsJSON={QuizQuestions} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
