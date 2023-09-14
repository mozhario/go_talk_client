import React, { Component } from "react";
import { sendMsg } from "chat/api";
import "./MessageControls.scss";


class ChatControls extends Component {
  constructor(props) {
    super(props);
    this.state = { message: ''};
  
    this.textareaRef = React.createRef();
  
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault(this.state.message);
  
    console.log(this.props.username);

    var message = {
      'sent_time': new Date(),
      'username': this.props.username,
      'text': this.state.text,
    };

    var serializedMessage = JSON.stringify(message);
    sendMsg(serializedMessage);

    this.setState({
      text: ''
    });
  
    this.textareaRef.current.focus();
  }

  handleKeyDown(event) {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent creating a new line
      this.handleSubmit(event);
    }
  }

  render() {
    return (
      <form className="chat-controls" onSubmit={this.handleSubmit}>
        <textarea 
          rows="3"
          name="text"
          id="text"
          className="chat-controls__message-input"
          placeholder="talk..."
          value={this.state.text}
          onChange={this.handleChange}
          ref={this.textareaRef}
          onKeyDown={this.handleKeyDown}>
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
