import React, { Component } from 'react';

export default class Top extends Component {
  render() {
    return (
      <div className="siimple-box siimple--bg-dark">
        <h1 className="siimple-box-title siimple--color-white">TODOOS</h1>
        <div className="siimple-rule"></div>
        <div className="siimple-box siimple--bg-white">
          <div>
            <h3 className="siimple--color-black">Introduction</h3>
            <div className="siimple-rule"></div>
            <div className="siimple-paragraph siimple-paragraph--lead">
            <p>This app can help you manage what you have to do. You can manage your “work” and “private” tasks separately. I hope you can improve your managing skills better than before.</p>
            </div>
            <div className="siimple-footer-title">Yours truly,</div>
            <div className="siimple-footer-title">Shun Nagahara</div>
          </div>
        </div>
      </div>
    );
  }
}