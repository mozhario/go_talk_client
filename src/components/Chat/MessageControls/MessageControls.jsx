import React, { Component } from "react";
import { sendMsg } from "chat/api";
import "./MessageControls.scss";


class ChatControls extends Component {
  constructor(props) {
    super(props);
    this.state = { message: '', username: '' };
  
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault(this.state.message);
    console.log(this.state.message);
    console.log(this.state.username);
    var message = {
      'sent_time': '31 feb 13:69',
      'username': this.state.username,
      'text': this.state.text,
    };
    var serializedMessage = JSON.stringify(message);
    sendMsg(serializedMessage);
  }

  render() {
    return (
      <form className="chat-controls" onSubmit={this.handleSubmit}>
        <input 
          type="text"
          name="username"
          placeholder="username"
          className="chat-controls__message-input"
          value={this.state.username}
          onChange={this.handleChange} />

        <textarea 
          rows="3"
          name="text"
          id="text"
          className="chat-controls__message-input"
          placeholder="talk..."
          value={this.state.text}
          onChange={this.handleChange}>
        </textarea>

        <button
            className="chat-controls__send-button"
            type="submit">
              Go!
        </button>
      </form>
    );
  }
}

export default ChatControls;
