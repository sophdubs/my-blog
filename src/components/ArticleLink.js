import React from "react";

class ArticleLink extends React.Component {
  navigateToArticle = () => {
    console.log(this);
  };

  render() {
    return (
      <div className="ArticleLink">
        <h1 onClick={this.navigateToArticle}>title</h1>
        <p>Short Summary</p>
        <p> IMAGE </p>
      </div>
    );
  }
}

export default ArticleLink;
