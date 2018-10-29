import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import HeaderContentFooter from "./components/HeaderContentFooter";
import simpleAction from './actions/simpleAction';

const mapStateToProps = state => ({...state});
const mapDispatchToProps = dispatch => {
  return {
    simpleAction: ()=>dispatch(simpleAction())
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
          {/* <pre>{JSON.stringify(this.props)}</pre>
          <button onClick={()=>this.props.simpleAction()}>Test redux action</button> */}
          <HeaderContentFooter/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
