import React from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom"
import Home from './components/Home'
import Order from './components/Order';


const App = () => {

  return(
    <BrowserRouter>
        <div className="container">
        <div className="header">
            <div className="logo">
                <Link to='/'><h2>Fast Food Station</h2></Link>
            </div>
            <div className="header-links">
                <ul>
                    <li>
                        <Link to='/order'>Get Order Summary</Link>
                    </li>
                </ul>
            </div>
        </div>
        <main>
            <div className="content">
                <Route path='/' exact={true} component={Home}/>
                <Route path='/order'  component={Order}/>   
            </div>
        </main>
        <div className="footer">
            &copyright 2020 all rights reserved. 
        </div>
        </div> 
    </BrowserRouter> 
  )
}

export default App;
