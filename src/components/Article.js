import React from "react";
import PropTypes from "prop-types";
import NavBar from "./NavBar";
import Comment from "./Comment";

class Article extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired
  };
  article = this.props.location.article;
  render() {
    return (
      <div>
        <NavBar />
        <p>{this.article.title}</p>
        <p>{this.article.synopsis}</p>
        <p>{this.article.p1}</p>
        <p>IMAGE</p>
        <p>{this.article.p2}</p>
        <p>{this.article.quote}</p>
        <p>{this.article.p3}</p>
        <p>{this.article.author}</p>
        <p>{this.article.published}</p>
        {this.article.comments.map(comment => (
          <Comment comment={comment} key={comment} />
        ))}
      </div>
    );
  }
}

export default Article;
