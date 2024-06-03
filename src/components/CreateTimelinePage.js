import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.css';

import { Quiz } from './Quiz';
import {Homepage} from './Homepage'
import { LikedLocation } from './LikedLocation';
import { Timeline } from './timeline';
import { Footer1 } from './Footer';
import { NavBar } from './NavBar';
import {Routes, Route, useLocation, Navigate, useNavigate, Outlet, navigateTo} from 'react-router-dom';
import { BrowserRouter } from 'react-dom/client';


//importing firebase and its methods
import { getDatabase, ref, get } from "firebase/database";
import app from "../firebaseConfig"

import SampleLikedLocations from '../data/SampleLikedLoc.json'
import locations from '../data/Location.json'
import Users from '../data/Users.json'
import { Timeline } from './timeline';

export function CreateTimelinePage(){
    <Timeline/>

    
    return;
}