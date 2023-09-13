import React from "react";
import "./Header.scss";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="header">
        <h2 className="header__title">🏃‍♀️GoTalk💬</h2>
      </div>
    )
  }
}

export default Header;