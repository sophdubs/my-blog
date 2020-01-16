import React from "react";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";

class ArticleLink extends React.Component {
  static propTypes = {
    article: Proptypes.object.isRequired
  };
  navigateToArticle = () => {};

  render() {
    return (
      <div className="ArticleLink">
        {/* <Link
          to={{
            pathname: `article/${this.props.article.id}`,
            article: this.props.article
          }}
        > */}
        {/*         
          {this.props.article.title}
        </Link> */}
        <Link
          to={{
            pathname: `article/${this.props.article.id}`,
            article: this.props.article
          }}
        >
          {this.props.article.title}
        </Link>

        <p>{this.props.article.summary}</p>
        <p> IMAGE </p>
      </div>
    );
  }
}

export default ArticleLink;
