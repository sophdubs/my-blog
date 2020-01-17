import React from "react";

class NavBar extends React.Component {
  render() {
    return (
      <div className="nav-div">
        <div className="b">
          <p className="article-icon-text">articles</p>
        </div>
        <div className="c">
          <p className="about-me-icon-text">about me</p>
        </div>
        <div className="d">
          <p className="contact-icon-text">contact</p>
        </div>
      </div>
    );
  }
}

export default NavBar;
