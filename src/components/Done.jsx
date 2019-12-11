import React, { Component } from 'react';
import DoneList from  './DoneList';

export default class Done extends Component {
  constructor(props){
    super(props);
    this.state = {
      todo: []
    };
     this.handleRemove = this.handleRemove.bind(this);
  }
  componentDidMount(){
    // LocalStorageから一覧を取得してstateに保存する
    let lists = window.localStorage.getItem('done')
    if (lists) {
      lists = JSON.parse(lists)
      lists.sort(function(a,b){
        if(a.date > b.date) return -1;
        if(a.date < b.date) return 1;
        return 0;
      })
      this.setState({todo: lists});
    }
  }
  // データ削除
  handleRemove(i){
    // todo配列からi番目から1つ目のデータを除外
    this.state.todo.splice(i,1);
    // setStateでtodo配列を上書き
    this.setState({todo: this.state.todo});
    // LocalStorageからデータを取得して対象のlistを削除して保存する
    let workLists = window.localStorage.getItem('done')
    workLists = JSON.parse(workLists)
    let targetList = workLists[i]
    workLists.splice(i,1);
    let json = JSON.stringify(workLists)
    window.localStorage.setItem('done', json)
  }
  render() {
    return (
      <div className="siimple-box siimple--bg-dark">
        <h1 className="siimple-box-title siimple--color-white">Done</h1>
        <div className="siimple-rule"></div>
        <DoneList todos={this.state.todo} handleRemove={this.handleRemove}/>
      </div>
    );
  }
}