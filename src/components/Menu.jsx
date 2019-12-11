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
      {/* <div className="siimple--float-left">
        <div className="siimple-btn siimple-btn--red m-right-5">
          <Link to = "/" style={style}>TOP</Link>
        </div>
        <div className="siimple-btn siimple-btn--orange m-right-5">
          <Link to = "/work" style={style}>Work</Link>
        </div>
        <div className="siimple-btn siimple-btn--yellow m-right-5">
          <Link to = "/private" style={style}>Private</Link>
        </div>
        <div className="siimple-btn siimple-btn--green">
          <Link to = "/done" style={style}>Done</Link>
        </div>
      </div> */}
      <div className="siimple--float-left">
        <div className="siimple-btn siimple-btn--red m-right-5 fs12">
          <Link to = "/" style={style}>TOP</Link>
        </div>
        <div className="siimple-btn siimple-btn--orange m-right-5 fs12">
          <Link to = "/work" style={style}>Work</Link>
        </div>
        <div className="siimple-btn siimple-btn--yellow m-right-5 fs12">
          <Link to = "/private" style={style}>Private</Link>
        </div>
        <div className="siimple-btn siimple-btn--green fs12">
          <Link to = "/done" style={style}>Done</Link>
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
          <Route path="/" exact component={Top}/>
          <Route path="/work" component={Work}/>
          <Route path="/private" component={Private}/>
          <Route path="/done" component={Done}/>
        </div>
      </Router>
    );
  }
}