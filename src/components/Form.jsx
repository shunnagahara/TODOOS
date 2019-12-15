import React, { Component } from 'react';

const Form = (props) => (
  <form className="siimple-form" onSubmit={props.handleAdd}>
    <label className="siimple-label siimple--color-white">Your todo:</label>
    <div className="siimple-form-field">
        <input name="title" type="text" className="siimple-input m-side-5" onChange={e => props.handleChange(e)}/>
        <input type="submit" disabled={props.message.title || props.initFlag && true} value="Add" className="siimple-btn siimple-btn--teal"/>
    </div>
    {props.message.title && (<div className="siimple--color-error">{props.message.title}</div>)}
  </form>
);

export default Form;