import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import store from './store';
import {loadUser} from './Js/actions/usersActions'
import {getPhotos} from './Js/actions/galleryActions'

import UsersList from './Components/User/UsersList';
import UserPhotos from './Components/Gallery/UsersPhotos'

import './App.css';

function App() {
  useEffect(() => store.dispatch(loadUser(), []));
  useEffect(() => store.dispatch(getPhotos(), []))
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={UsersList} />
      <Route exact path='/:id' component={UserPhotos} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
