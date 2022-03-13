import React, { Component } from "react";
import { connect, sendMsg } from "./api";
import "./App.css";
import Header from './components/Header/Header';
import ChatHistory from './components/ChatHistory/ChatHistory';
import MessageControls from './components/MessageControls/MessageControls';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatHistory: []
    }
  }

  send() {
    console.log("hello");
    sendMsg("hello");
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ChatHistory chatHistory={this.state.chatHistory} />
        <MessageControls />
        <button onClick={this.send}>Hit</button>
      </div>
    );
  }

  componentDidMount() {
    connect((msg) => {
      console.log("New text")
      this.setState(prevState => ({
        chatHistory: [...this.state.chatHistory, msg]
      }))
      console.log(this.state);
    });
  }
}

export default App;
