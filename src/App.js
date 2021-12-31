import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import SignUp from './components/pages/Sign-up/SignUp';
import events from './components/pages/Events/events';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sponsors from './components/pages/Sponsors/Sponsors';
import FAQ from './components/pages/FAQ/FAQ';
import landingPage from './components/pages/LandingPage/LandingPage.js';
// import BasicStack from './components/pages/Events/EventMobile/EventTab';
import Photography from './components/pages/Events/MobileView/Photography';
import Cinematography from './components/pages/Events/MobileView/Cinematography';
import Outreach from './components/pages/Events/MobileView/Outreach';
import Design from './components/pages/Events/MobileView/Design';
import Media from './components/pages/Events/MobileView/Media';
import Animation from './components/pages/Events/MobileView/Animation';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/landing" exact component={Home} />
          <Route path="/sign-up" component={SignUp} />;
          <Route path="/events" exact component={events} />;
          <Route path="/events/photography" component={Photography} />;
          <Route path="/events/cinematography" component={Cinematography} />;
          <Route path="/events/outreach" component={Outreach} />;
          <Route path="/events/media" component={Media} />;
          <Route path="/events/design" component={Design} />;
          <Route path="/events/animation" component={Animation} />;
          <Route path="/sponsors" component={Sponsors} />
          <Route path="/FAQ" component={FAQ} />
          <Route path="/" component={landingPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
