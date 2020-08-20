import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import ParticipantsList from "./pages/Participants/List";
import ParticipantForm from "./pages/Participants/Form";
import SelectParticipants from "./pages/Years/SelectParticipants";
import ExistingAssignments from "./pages/Years/ExistingAssignments";

import {LoginController, useToken} from "pages/Login";
import Menu from './menu/Menu';

function App() {

  const [jwtToken] = useToken();

  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            {jwtToken &&<Menu items={[
                  {id: 1, title: 'Assignment', link: '/'},
                  {id: 2, title: 'Participants', link: '/participants'},
            ]}/>}
          </nav>
          <Switch>
            {!jwtToken && <Route path="/"><LoginController /></Route>}
            <Route path="/years/:yearId">
              <ExistingAssignments />
            </Route>
            <Route exact path="/selectParticipants">
              <SelectParticipants />
            </Route>
            <Route path="/participants/edit/:participantId">
              <ParticipantForm />
            </Route>
            <Route exact path="/participants/add">
              <ParticipantForm />
            </Route>
            <Route exact path="/participants">
              <ParticipantsList />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
