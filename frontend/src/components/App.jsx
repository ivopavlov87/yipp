
import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import Modal from './modal/modal';

import PostsContainer from './posts/posts_container';
import MainPage from './main/main_page';
// import LoginFormContainer from './session/login_form_container';
// import SignupFormContainer from './session/signup_form_container';
import ProfileContainer from './profile/profile_container';
// import PostComposeContainer from './posts/post_compose_container';
import PostEditContainer from './posts/post_edit_container';
import DogsIndexContainer from './dog/dog_index_container';

import DogShowContainer from './dog/dog_show_container'
import DogCreateFormContainer from './dog/dog_create_form_container'
import DogEditFormContainer from './dog/dog_edit_form_container'
import DogListContainer from './dog/dog_list_container'

// import SearchContainer from './nav/search_container'
// import logo from './nav/assets/logo.png'


const App = () => (
  <div>
    <Modal />
    <NavBarContainer />
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/dogs" component={DogsIndexContainer} />
      <Route exact path={`/dogs/:dogId`} component={DogShowContainer} />

      <Route exact path="/posts" component={PostsContainer} />
      <ProtectedRoute exact path="/profile" component={ProfileContainer} />

      <ProtectedRoute exact path="/posts/:id/edit" component={PostEditContainer} />
      <ProtectedRoute exact path="/profile/dogs/new" component={DogCreateFormContainer} />
      <ProtectedRoute exact path={`/dogs/:dogId/edit`} component={DogEditFormContainer} />
      <ProtectedRoute exact path="/profile/dogs" component={DogListContainer} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;