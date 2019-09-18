
import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import PostsContainer from './posts/posts_container';
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ProfileContainer from './profile/profile_container';
import PostComposeContainer from './posts/post_compose_container';
import DogsIndexContainer from './dog/dog_index_container';



const App = () => (
  <div>
    <h1>Hello World!</h1>
    <NavBarContainer />
    <Switch>
      <Route exact path="/dogs" component={DogsIndexContainer} />
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />

      <ProtectedRoute exact path="/posts" component={PostsContainer} />
      <ProtectedRoute exact path="/profile" component={ProfileContainer} />
      <ProtectedRoute exact path="/new_post" component={PostComposeContainer} />
    </Switch>
  </div>
);

export default App;