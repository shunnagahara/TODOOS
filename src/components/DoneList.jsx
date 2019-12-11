import React, { Component } from 'react';

let btn = { cursor: 'pointer' };
let isDisplayDate = true
let todos = []

const DoneList = (props) => (
   <div className="siimple-box">
     {props.todos.map((todo, i) => {
       if (i === 0) {
         isDisplayDate = true
       }
       if (i !== 0) {
          if (props.todos[i - 1]["date"] === todo["date"]) {
            isDisplayDate = false
          } else {
            isDisplayDate = true
          }
       }
       console.log(isDisplayDate)
       return <div key={i}>{isDisplayDate && <h3 className="siimple--color-white">{todo.date}</h3>}<div key={i} className="siimple-list-item siimple--bg-white fs10">{todo.title} <span className="siimple-tag siimple-tag--error siimple-hover" style={btn} onClick={() => props.handleRemove(i)}>Delete</span></div></div>
     })}
   </div>
);

export default DoneList;