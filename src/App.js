import React, { Component } from 'react';
import {createStore} from 'redux';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;


//#1 const greeting = ()=>({welcome:'hello'})// the function == reducer
const defaultState = {
  welcome:'hi',
  otherState:'some stuff'
}
const greeting = (state = defaultState, action)=>{
 switch (action.type){
  case 'GREET_ME':
    return {...state, welcome:'hello mei'};//...state can keep our previous state and only modify what we want to modify
  case 'GREET_WORLD':
    return {...state, welcome:'hello world'}
  default:
   return state;
 }
}  
//#2
const store = createStore(greeting)//create store the function

console.log(store.getState())
//#3
store.dispatch({
  type:'GREET_ME'
})

console.log(store.getState())