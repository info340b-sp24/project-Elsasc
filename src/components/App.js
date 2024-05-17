import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import { Quiz } from './Quiz';
import {Homepage} from './Homepage'
import { Footer1 } from './Footer';
import { NavbarBrand } from 'react-bootstrap';
// Cleaned

export default function App(props){
    return (
    <div>
    <NavbarBrand />
    <Quiz />
    <Footer1 />  
    </div>  
    );
}