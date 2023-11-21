import './App.css';
// import "bootstrap";
import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom";
import axios from "axios";
import Header from './Components/Layout/Header';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Project from './Components/Project';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/lien-he' element={<Contact />} />
            <Route path='/du-an' element={<Project />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
