import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import ParticipantsView from "./pages/Participants";
import ParticipantWidget from "./pages/Participants/ParticipantWidget";
import SelectParticipantWidget from "./pages/Home/addparticipants/SelectParticipantsWidget";

import Menu from './menu/Menu';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <Menu items={[
                  {id: 1, title: 'Assignment', link: '/'},
                  {id: 1, title: 'Participants', link: '/participants'},
            ]}/>
          </nav>
          <Switch>
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
              <ParticipantsView />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
