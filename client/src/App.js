import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import HeaderContentFooter from "./components/HeaderContentFooter"
// import addForm from "./components/AddForm";
// import searchForm from "./components/SearchForm";
// import editForm from "./components/EditForm";
// import Navbar from "./components/NavBar"
{/* <Route exact path="/new" component={addForm}></Route>
<Route exact path="/search" component={searchForm}></Route>
<Route exact path="/edit" component={editForm}></Route> */}
class App extends Component {
  render() {
    return (
    // <Router>
    //   <div>
    //    <div className="App">      
    //     </div>
    //   </div>
    // </Router>
    <div className="App">
        <HeaderContentFooter/>
    </div>
    );
  }
}

export default App;
