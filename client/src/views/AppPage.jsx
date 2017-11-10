import React from 'react';
import {observer} from 'mobx-react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Lobby from './Lobby';
import Room from './room';

const AppPage = observer(() => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Lobby}/>
        <Route path='/rooms/:id' component={Room}/>
      </Switch>
    </Router>
  );
});

export default AppPage;
