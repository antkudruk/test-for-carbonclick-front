import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import ParticipantsList from "./pages/Participants/List";
import ParticipantWidget from "./pages/Participants/Form";
import SelectParticipantWidget from "./pages/Home/addparticipants/SelectParticipantsWidget";

import {LoginController, useToken} from "pages/Login";

import Menu from './menu/Menu';
import {AssignmentWidget} from "./pages/Home/assignments/AssignmentWidger";

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
              <AssignmentWidget />
            </Route>
            <Route exact path="/selectParticipants">
              <SelectParticipantWidget />
            </Route>
            <Route path="/participants/edit/:participantId">
              <ParticipantWidget />
            </Route>
            <Route exact path="/participants/add">
              <ParticipantWidget />
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
