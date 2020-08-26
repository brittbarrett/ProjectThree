import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Booking from "./pages/Booking";
import Navigation from "./components/Navigation";
import CharTeaser from "./components/CharTeaser";

import Confirmation from "./pages/Confirmation";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import MenuTeaser from "./components/MenuTeaser";
import MenuList from "./pages/MenuList";
import CharacterList from "./pages/CharacterList";

// import Calendar from "./components/Calendar";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route exact path={["/"]} component={Homepage} />

          <Route exact path="/booking">
            <Booking />
          </Route>
          <Route exact path="/confirm">
            <Confirmation />
          </Route>
          <Route exact path="/menuInfo" component={MenuTeaser} />

          <Route exact path="/menuList" component={MenuList} />

          <Route exact path="/charInfo" component={CharTeaser} />

          <Route exact path="/charList" component={CharacterList} />

          <Route>
            <Homepage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
