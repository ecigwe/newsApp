import React, { Component } from "react";

import "./App.css";
import Form from "./components/Form";
import News from "././components/News";

class App extends Component {
  state = {
    news: []
  };
  componentDidMount = () => {
    let json = localStorage.getItem("news");
    let news = JSON.parse(json);
    this.setState({ news: news });
  };
  componentDidUpdate = () => {
    let news = JSON.stringify(this.state.news);
    localStorage.setItem("news", news);
  };

  render() {
    let getNews = async e => {
      e.preventDefault();
      //const jsonCall = "https://jsonplaceholder.typicode.com/photos";

      let newsName = e.target.elements.newsName.value;
      const ApiKey = "2e004fcb15a74c669dcf29be5321d601";
      const newsWebsite = `https://newsapi.org/v2/everything?q=${newsName}&apiKey=${ApiKey}`;
      const apiCall = await fetch(
        `https://cors-anywhere.herokuapp.com/${newsWebsite}`
      );
      const data = await apiCall.json();

      this.setState({ news: data.articles });
      console.log(this.state.news);
    };

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">News search</h1>
        </header>
        <Form getNews={getNews} />
        <News news={this.state.news} />
      </div>
    );
  }
}

export default App;
