import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <Router>
      <div>
          <Nav/>
        <Switch>
          <Route exact path="/" component={Books} />
          <Route exact path="/saved" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
