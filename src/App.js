import React from 'react';
import './App.css';
import Nav from './Navbar/Nav';
import About from './About';
import Users from './Users/Users';
import Home from './Home/Home';
import ItemDetail from './itemDetail';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
  <Router> 
      <div className="App">

        <Nav/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/users" component={Users}/>
          <Route path="/users/:id" component={ItemDetail} />
        </Switch>
      </div>
    </Router>

  );
}
 
export default App;


