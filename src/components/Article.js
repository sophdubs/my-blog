import React from "react";
import NavBar from "./NavBar";
import Synopsis from "./Synopsis";
import Quote from "./Quote";

class Article extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1 className="title">Article Title</h1>
        <Synopsis />
        <p> Paragraph 1</p>
        <p>IMAGE</p>
        <p> Paragraph 2</p>
        <Quote />
        <p> Paragraph 3</p>
        <div className="likes comments share"> LIKE COMMENT SHARE</div>
      </div>
    );
  }
}

export default Article;
