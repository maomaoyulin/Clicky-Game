import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from "./pages/Main";

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Main} />
      <Route component={Main} />
    </Switch>
  </Router>
)

export default App;
