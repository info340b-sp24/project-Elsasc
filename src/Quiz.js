import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { QuizContainer } from './QuizContainer';
import { NavBar } from './NavBar';



export function Quiz(props){
    return(
    <html className='quiz 'lang="en">
        
        <head>
          <meta charset="utf-8"></meta>
          <meta name="author" content="Cole Elsasser, Brian Chiang, Vincent Li"></meta>
          <meta name="description" content="Quiz for recommending locations"></meta>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
          
          <link rel="icon" type="image/x-icon" href="img/space-needle-icon.png"></link>
          <title>Seattle is FUN! Quiz</title>
      
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"></link>
        
        
          <link rel="stylesheet" href="css/style.css"></link>
        
        </head>
        
        <body class="quiz">    
        <header>
            <NavBar />
        </header>
        
          <main class="quiz">
            <QuizContainer />
        </main>
        <footer>
          <p class="copy-right-notes"> Copyright &copy; Created by
              <a href="elsascol@uw.edu">elsascol@uw.edu</a>
              <a href="cch0223@uw.edu">cch0223@uw.edu</a>
              <a href="zli2003@uw.edu">zli2003@uw.edu</a>. 2024
          </p>
        </footer>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
        </body>
    </html>
    );
    }