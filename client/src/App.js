import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import addForm from "./components/AddForm";
import searchForm from "./components/SearchForm";
import editForm from "./components/EditForm";
import Navbar from "./components/NavBar"

class App extends Component {
  render() {
    return (
    <Router>
      <div>
       <Navbar/>
       <div className="App container">
            <Route exact path="/new" component={addForm}></Route>
            <Route exact path="/search" component={searchForm}></Route>
            <Route exact path="/edit" component={editForm}></Route>
        </div>
      </div>
    </Router>
    );
  }
}

export default App;
