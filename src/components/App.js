import React from "react";
import ArticleLink from "./ArticleLink";

class App extends React.Component {
  state = {
    articles: {}
  };
  render() {
    return (
      <div className="App">
        <h1 className="title">My Blog</h1>
        <h4 className="name">Sophie Dubois</h4>
        <ArticleLink />
      </div>
    );
  }
}

export default App;
