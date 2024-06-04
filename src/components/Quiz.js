import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import { QuizContainer } from './QuizContainer';


export function Quiz(props) {
  return (
    <div className='quiz-html'>

      <div className="quiz-body">

        <div className="quiz-main">
          <QuizContainer />
        </div>

      </div>

    </div>
  );
}