import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Top from './Top';
import Work from './Work';
import Private from './Private';
import Done from './Done';

let style = { textDecoration: 'none', color: "#fff" };

function Headers() {
  return (
  <div className="siimple-navbar">
      <div className="siimple--float-left">
        <div className="siimple-btn siimple-btn--red m-right-5 fs12">
          <Link to = "/TODOOS" style={style}>TOP</Link>
        </div>
        <div className="siimple-btn siimple-btn--orange m-right-5 fs12">
          <Link to = "/TODOOS/work" style={style}>Work</Link>
        </div>
        <div className="siimple-btn siimple-btn--yellow m-right-5 fs12">
          <Link to = "/TODOOS/private" style={style}>Private</Link>
        </div>
        <div className="siimple-btn siimple-btn--green fs12">
          <Link to = "/TODOOS/done" style={style}>Done</Link>
        </div>
      </div>
  </div>
  );
}

export default class Menu extends Component {
  render() {
    return (
      <Router>
        <div>
          {Headers()}
          <Route path="/TODOOS" exact component={Top}/>
          <Route path="/TODOOS/work" component={Work}/>
          <Route path="/TODOOS/private" component={Private}/>
          <Route path="/TODOOS/done" component={Done}/>
        </div>
      </Router>
    );
  }
}