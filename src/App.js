import React,{Fragment} from 'react';
import './App.css';
import Header from './Container/header'


import Routing from './Routing';
import { connect } from 'react-redux';

function App(props) {
  return (
    <Fragment>
      <Header badge={props.badge}/>
      <Routing />
    </Fragment>
  );
}

const mapStateToProps=state=>{
  return {
      badge:state.badge
  }
}
export default connect(mapStateToProps)(App);
