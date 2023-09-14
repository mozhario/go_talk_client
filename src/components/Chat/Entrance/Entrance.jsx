import React, { Component } from "react";
import "./Entrance.scss";

class Entrance extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "" };
  }

  handleChange = (event) => {
    this.setState({ username: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onUsernameSubmit(this.state.username);
  }

  render() {
    return (
      <div class="entrance">
      <form class="enter-form" onSubmit={this.handleSubmit}>
        <div class="enter-form__welcome-text">
            Hey you!<br/>
            I haven't seen you here before...
        </div>
        <input
          class="enter-form__username-input"
          type="text"
          value={this.state.username}
          onChange={this.handleChange}
          placeholder="Enter your username"
        />
        <button class="enter-form__username-button" type="submit">Submit</button>
      </form>
      </div>
    );
  }
}

export default Entrance;
