import React from "react";
import ArticleLink from "./ArticleLink";
import db from "../db/db";

class App extends React.Component {
  state = {
    articles: []
  };

  componentDidMount() {
    let articles = [];
    db.collection("articles")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          articles.push(doc.data());
        });
      })
      .then(() => {
        this.setState({ articles: articles });
      });
  }
  render() {
    return (
      <div className="App">
        <h1 className="title">My Blog</h1>
        <h4 className="name">Sophie Dubois</h4>
        {this.state.articles.map(article => (
          <ArticleLink article={article} key={article.published} />
        ))}
      </div>
    );
  }
}

export default App;
