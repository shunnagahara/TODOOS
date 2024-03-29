import React, { Component } from 'react';

let btn = { cursor: 'pointer' };

const TodoList = (props) => (
   <div className="siimple-list">
     {props.todos.map((todo, i) => {
       return <div key={i} className="siimple-list-item siimple--bg-white">{todo.title} <span className="siimple-tag siimple-tag--error siimple-hover" style={btn} onClick={() => props.handleRemove(i)}>Delete</span><span className="siimple-tag siimple-tag--success m-right-10" style={btn} onClick={() => props.handleDone(i)}>Done</span></div>
     })}
   </div>
)

export default TodoList;