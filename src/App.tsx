import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import Participants from "./pages/Participants";
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
            <Route path="/participants">
              <Participants />
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
