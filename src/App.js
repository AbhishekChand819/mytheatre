import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import SearchResult from "./components/SearchResult";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/search/q=:query" component={SearchResult} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
