import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import { QuizContainer } from './QuizContainer';
import { NavBar } from './NavBar';
import { Footer1 } from './Footer';


export function Quiz(props){
    return(
    <html className='quiz' lang="en">
        
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
        
        <body className="quiz">    
        <header>
            <NavBar />
        </header>
        
          <main className="quiz">
            <QuizContainer />
        </main>
        
        <Footer1 />
        </body>
    </html>
    );
    }