import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import { NavBar } from './NavBar';

const questionArray = [

  // Question 0
  {
    QNum: 1,
    QTitle: 'If you could choose one place to live forever where would you live?',
    QAnswers: [
      { AnsText: "Dubai", AnsTag: "Shopping" },
      { AnsText: "A hut in the woods", AnsTag: "Outdoors" },
      { AnsText: "In an arcade", AnsTag: "Other" },
      { AnsText: "In an apartment overlooking the Eiffel Tower", AnsTag: "Sightseeing" }
    ]
  },
  // Question 1
  {
    QNum: 2,
    QTitle: "What's your idea of a perfect day?",
    QAnswers: [
      { AnsText: "Spending the day out shopping for all new souvenirs", AnsTag: "Shopping" },
      { AnsText: "Enjoying all the finest dining and three course meals I can", AnsTag: "Restaurant" },
      { AnsText: "Isolated and enjoying the beauty of nature", AnsTag: "Outdoors" },
      { AnsText: "Traveling to historic museums", AnsTag: "Sightseeing" }
    ]
  },
  // Question 2
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
  // Question 3 
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
  {
    QNum: 5,
    QTitle: 'Would you like to submit?',
    QAnswers: [
      { AnsText: "Submit", AnsTag: "submit" },
    ]
  }
]

const tagDescriptions = {
  Indoor: "You prefer the great indoors and want a nice spot to explore in the city.",
  Outdoor: "Your favorite place to be is in nature, you truly feel at home in the outdoors.",
  Park: "Going to the park is a great passtime and you're looking to explore the wonderful spaces Seattle has to offer.",
  Sightseeing: "You love to see all the most interesting and unique sights you can find.",
  Shopping: "A day of looking around the shops is a dream come true for you!",
  Restaurant: "Your favorite part of travel is sampling all the cuisines the area has to offer.",
  Other: "You are looking for a unique experience outside of the usual locations people might head to.",
  Free: "You enjoy fun public spaces open for everyone to enjoy.",
  Cheap: "You like to be safe with your travel budget.",
  Moderate: "You moderate",
  Expensive: "Test expensive"
}

const taglist = []

function QuizQuestionList(props) {

  const [currentQ, setCurrentQ] = useState(0);

  const handleButtonClick = (event) => {
    if (event.target.vale !== 'submit') {
      const nextQ = currentQ + 1
      setCurrentQ(nextQ);
      // Add tags for final calculation
      taglist.push(event.target.value)
    }

  }

  console.log(taglist)

  if (currentQ === questionArray.length - 1) {
    return (
      <div className="card border border-dark rounded shadow-lg mb-5 pd-0">
        <div className="card-title">
          <h3 className="fs-2 text-center"> Quiz Result</h3>
        </div>

        <div className="card-body">
          <div className="d-grid gap-2 px-2 d-md-block rounded">
            <p className="fs-3"> We would reccommend you look for the following tags that might appeal to you most</p>
            {taglist.map((tag) =>
              <p className="fs-4" key={tag}>{tag + ": " + tagDescriptions[tag]}</p>
            )
            }
          </div>
        </div>

      </div>);
  }
  else {
    return (
      <div className="card border border-dark rounded shadow-lg mb-4">

        <div className="card-title">
          <h3 className="fs-2 text-center"> {questionArray[currentQ].QNum + ". " + questionArray[currentQ].QTitle}</h3>
        </div>

        <div className="card-body">
          <div className="d-grid gap-2 px-2 d-md-block rounded text-center">
            {questionArray[currentQ].QAnswers.map((answer) =>
              <button className="btn btn-outline-primary" type="button" onClick={handleButtonClick} value={answer.AnsTag} data-bs-toggle="button">{answer.AnsText}</button>)}
          </div>
        </div>

      </div>
    );
  }
}

// function QuizQuestion(props) {
//   <div className="card border border-dark rounded shadow-lg mb-4">

//     <div className="card-title">
//       <h3 className="fs-2 text-center"> {questionArray[currentQ].QNum + ". " + questionArray[currentQ].QTitle}</h3>
//     </div>

//     <div className="card-body">
//       <div className="d-grid gap-2 px-2 d-md-block rounded text-center">
//         {questionArray[currentQ].QAnswers.map((answer) =>
//           <button className="btn btn-outline-primary" type="button" onClick={handleButtonClick} value={answer.AnsTag} data-bs-toggle="button">{answer.AnsText}</button>)}
//       </div>
//     </div>

//   </div>
// }

// function QuizResult(props) {
//   const unqTaglist = [... new Set(taglist)];
//   return (
//     <div className="card border border-dark rounded shadow-lg mb-5 pd-0">
//       <div className="card-title">
//         <h3 className="fs-2 text-center"> Quiz Result</h3>
//       </div>

//       <div className="card-body">
//         <div className="d-grid gap-2 px-2 d-md-block rounded">
//           <p className="fs-3"> We would reccommend you look for the following tags that might appeal to you most</p>
//           {unqTaglist.map((tag) =>
//             <p className="fs-4" key={tag}>{tag + ": " + tagDescriptions[tag]}</p>
//           )
//           }
//         </div>
//       </div>

//     </div>);
// }



export function QuizContainer(props) {
  return (
    <div>
      <div className="d-flex  justify-content-center mx-5">

        <div className="container">
          <h2 className="text-center py-4"> Quiz - What kind of traveler are you? </h2>
          <div className="row">
            <div className="col bg-auto justify-content-md-center">
              <QuizQuestionList />
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}


// function QuizResult() {
//   <div className="card border border-dark rounded shadow-lg m-4">

//     <div className="card-title">
//       <h3 className="fs-2 text-center"> Quiz Result</h3>
//     </div>

//     <div className="card-body">
//       <div className="d-grid gap-2 px-2 d-md-block rounded">
//         <p className="fs-3"> We would reccommend you look for the following tags that might appeal to you most</p>
//         {taglist.map((tag) =>
//           <p className="fs-4" key={tag}>{tag + ": " + tagDescriptions[tag]}</p>
//         )
//         }
//       </div>
//     </div>

//   </div>

// }

