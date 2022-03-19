import React from "react";
import "./Header.scss";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {'closeScreenShow':  false};

    this.showCloseScreen.bind(this);
  }

  render () {
    return (
      <div className="header">
        <h2 className="header__title">🏃‍♀️GoTalk💬</h2>
        <div className="close-button" onClick={this.showCloseScreen}>X</div>

        <div className={this.state.closeScreenShow ? 'close-screen close-screen_show' : 'close-screen'}>
          Why?
        </div>
      </div>
    )
  }

  showCloseScreen = () => {
    this.setState({'closeScreenShow': true});
    setTimeout(
      function() {
        this.setState({'closeScreenShow': false})
    }.bind(this), 2000)
  }
}

export default Header;