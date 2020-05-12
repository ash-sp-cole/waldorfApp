import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import Messages from './Components/Messages';
import Friends from './Components/Friends';
import PlaceholderExampleCard from "./Components/Login";
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>
  <div>
<Header/>

<Route path ='/' exact component={Home}/>
<Route path ='/messages' component ={Messages}/>
<Route path ='/friends' component ={Friends}/>



  </div>
  </BrowserRouter>
  );
}

export default App;
