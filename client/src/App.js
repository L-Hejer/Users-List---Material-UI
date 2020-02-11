import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import store from './store';
import {loadUser} from './Js/actions/usersActions'

import UsersList from './Components/User/UsersList';
import UserPhotos from './Components/Gallery/UsersPhotos'

import './App.css';

function App() {
  useEffect(() => store.dispatch(loadUser(), []))
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={UsersList} />
      <Route exact path='/user' component={UserPhotos} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
