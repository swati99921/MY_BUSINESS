import React from 'react';
import './App.css';
import Home from './Component/Pages/Home';
import Contact from './Component/Pages/Contact';
import Aboutus from './Component/Pages/Aboutus';
import Register from './Component/Pages/Register';
import BestSeller from './Component/Pages/BestSeller';
import Login from './Component/Pages/Login';
import Navbar from './Component/inc/Navbar';
import Slider from './Component/inc/Slider';
import { BrowserRouter as Router,  Route, Switch} from 'react-router-dom';
import UseEffectApi from './Component/useEffect/useEffectApi';
import Trial from './Component/Pages/Trial';
import Searchbar from './Component/inc/Searchbar';
import Registers1 from './Component/Pages/Registers1';



function App() {
  return (
    // <div>
    //   {/* <UseEffectApi/> */}
    // </div>
      <Router>
    <div className="App">
    <Navbar/>
    <Searchbar/>
    {/* <Slider/> */}
    <Switch>
    <Route exact path="/">
    <Home/>
    </Route>
    <Route path="/contact">
    <Contact/>
    </Route>
    <Route path="/aboutus">
    <Aboutus/> 
    </Route>
    <Route path="/registers1">
    <Registers1/>
    </Route>
    <Route path="/bestseller">
    <BestSeller/>
    </Route>
    <Route path="/login">
    <Login/>
    </Route>
    <Route path="/useEffectApi">
    <UseEffectApi/>
    </Route>
    </Switch>
    {/* <Trial/> */}
   
    </div>
    </Router>
   
  );
}
  
export default App;
