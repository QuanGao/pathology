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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Placenta Pathology Logger</h1>
        </header>
       <Navbar/>
        <Route exact path="/new" component={addForm}></Route>
        <Route exact path="/search" component={searchForm}></Route>
        <Route exact path="/edit" component={editForm}></Route>
      </div>
    </Router>
    );
  }
}

export default App;
