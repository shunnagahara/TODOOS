import React, { Component } from 'react';
import Form from './Form';
import TodoList from  './TodoList';
import Validation from './Validation';

export default class Private extends Component {
  constructor(props){
    super(props);
    this.state = {
      todo: [],
      initFlag: true,
      info: {
        title: '',
      },
      message: {
        title: '',
      }
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount(){
    // LocalStorageから一覧を取得してstateに保存する
    let lists = window.localStorage.getItem('private')
    if (lists) {
      lists = JSON.parse(lists)
      this.setState({todo: lists});
    }
  }
  handleChange = (e) => {
    this.setState({initFlag: false});
    const key = e.target.name;
    const value = e.target.value;
    const { info, message } = this.state;

    this.setState({
      info: { ...info, [key]: value }
    });
    this.setState({
      message: {
        ...message,
        [key]: Validation.formValidate(key, value)
      }
    });
  };
  // データ保存処理
  handleAdd(e){
    // リダイレクト防止
    e.preventDefault();
    // フォームから受け取ったデータをオブジェクトに挿入して、stateのtodo配列に追加
    this.state.todo.push({title: e.target.title.value}); // まだ保存されていない
    // setStateを使ってstateを上書き
    this.setState({todo: this.state.todo}); // 保存完了
    // inputのvalueを空に
    e.target.title.value = '';
    this.setState({initFlag: true});
    // JSON形式でLocalStorageに保存する
    let json = JSON.stringify(this.state.todo)
    window.localStorage.setItem('private', json)
  }
  // データ削除
  handleRemove(i){
    // todo配列からi番目から1つ目のデータを除外
    this.state.todo.splice(i,1);
    // setStateでtodo配列を上書き
    this.setState({todo: this.state.todo});
    // LocalStorageからデータを取得して対象のlistを削除して保存する
    let privateLists = window.localStorage.getItem('private')
    privateLists = JSON.parse(privateLists)
    let targetList = privateLists[i]
    privateLists.splice(i,1);
    let json = JSON.stringify(privateLists)
    window.localStorage.setItem('private', json)
    this.handleDoneAdd(targetList["title"])
  }
  // done追加処理
  handleDoneAdd(title){
    let doneLists = window.localStorage.getItem('done')
    if (!doneLists) {
      doneLists = []
    } else {
      doneLists = JSON.parse(doneLists)
    }
    let date = new Date
    let today = date.getFullYear() + '-' + ("0"+(date.getMonth() + 1)).slice(-2) + '-' + ("0"+date.getDate()).slice(-2)
    doneLists[Object.keys(doneLists).length] = {title:title, date:today, type:'private'}
    let json = JSON.stringify(doneLists)
    window.localStorage.setItem('done', json)
  }
  render() {
    return (
      <div className="siimple-box siimple--bg-dark">
        <h1 className="siimple-box-title siimple--color-white">Private</h1>
        <Form initFlag={this.state.initFlag} message={ this.state.message } handleAdd={this.handleAdd} handleChange={this.handleChange}/>
        <div className="siimple-rule"></div>
        <TodoList todos={this.state.todo} handleRemove={this.handleRemove}/>
      </div>
    );
  }
}