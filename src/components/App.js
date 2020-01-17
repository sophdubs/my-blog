import React from "react";
import ArticleLink from "./ArticleLink";
import db from "../db/db";
import NavBar from "./NavBar";

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
        <div className="nav">
          <NavBar />
        </div>
        <div className="image-div">
          <div className="image"></div>
          <div className="hello-world">Hello World,</div>
          <div className="sophie">I&apos;m Sophie</div>
        </div>

        <div className="articles">
          {this.state.articles.map((article, i) => (
            <ArticleLink article={article} key={i + 1} index={i + 1} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
