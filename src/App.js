import {BrowserRouter, Route} from 'react-router-dom';
import SignUpForm from './signupform';
import SignInForm from './signinform';

// import { useEffect, useState } from "react";
// import Recipe from "./Recipe";
// import "./App.css";


function App() {
  
    
  return (

    <BrowserRouter>
    <div className='App'>
    <Route exact path="/" component={SignUpForm} />
    <Route exact path="/login" component={SignInForm} />
    </div>
    </BrowserRouter>
    
  );
}

export default App;
