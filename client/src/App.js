import React, { useEffect } from 'react';
// import { connect } from "react-redux";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import store from './store';

import UsersList from './Components/User/UsersList'

import './App.css';

function App() {
  return (
    <div className="App">
      <UsersList/>
    </div>
  );
}

export default App;
