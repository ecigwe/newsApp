import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class OneNews extends Component {
  state = {
    activeNews: []
  };
  componentDidMount = async () => {
    //const jsonCall = "https://jsonplaceholder.typicode.com/photos";

    let newsTitle = this.props.location.state.OneNews;
    const ApiKey = "2e004fcb15a74c669dcf29be5321d601";
    const newsWebsite = `https://newsapi.org/v2/everything?q=${newsTitle}&apiKey=${ApiKey}`;
    const req = await fetch(
      `https://cors-anywhere.herokuapp.com/${newsWebsite}`
    );
    const res = await req.json();
    this.setState({
      activeNews: res.articles[0]
    });

    console.log(this.state.activeNews);
  };
  render() {
    let activeNews = this.state.activeNews;
    console.log(this.props);
    return (
      <div className="container">
        {this.state.activeNews.length !== 0 && (
          <div className="active-recipe">
            <img
              className="active-recipe__img"
              src={activeNews.urlToImage}
              alt=""
            />
            <h3 className="active-recipe__title"> {activeNews.title}</h3>
            <p>{activeNews.content}</p>
            <p className="active-recipe__website">
              website:
              <span>
                <a href={activeNews.url}>{activeNews.url}</a>
              </span>
            </p>
            <button className="active-recipe__button">
              <Link to="/">Go Home</Link>
            </button>
          </div>
        )}
      </div>
    );
  }
}
