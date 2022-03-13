import React, { Component } from "react";
import "./MessageControls.scss";

class ChatControls extends Component {
  render() {
    return (
      <div className="chat-controls">
        <textarea rows="3" name="message" id="message" className="chat-controls__message-input" placeholder="talk..."></textarea>
        <button className="chat-controls__send-button">Go!</button>
      </div>
    );
  }
}

export default ChatControls;
