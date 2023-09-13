import React from "react";
import "./FakeCloseButton.scss";

class FakeCloseButton extends React.Component {
  constructor(props) {
    super(props);
    this.element = props.elementRef;

    this.close.bind(this);
  }

  render () {
    return (
      <div className="close-button" onClick={this.close}>X</div>
    )
  }

  close = () => {
    var element = this.elementRef.current;
    var elementClassName = element.className;
    element.className = elementClassName + 'closed';
    // console.log('fuck');
    setTimeout(
      function() {
        element.className = elementClassName;
        // console.log('suck');
    }.bind(this), 2000)
  }
}

export default FakeCloseButton;
