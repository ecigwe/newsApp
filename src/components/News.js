import React from "react";
import { Link } from "react-router-dom";

export default function News(props) {
  return (
    <div className="container">
      <div className="row">
        {props.news.map(news => {
          return (
            <div
              className="col-md-4"
              key={news.publishedAt}
              style={{ marginBottom: "2rem" }}
            >
              <div className="recipes__box">
                <img className="recipe__box-img" src={news.urlToImage} alt="" />
                <div className="recipe__text">
                  <h5>
                    {news.title.length > 20
                      ? `${news.title}`
                      : `${news.title.substring(0, 25)}`}
                  </h5>
                </div>
                <button className="recipe_buttons">
                  <Link
                    to={{
                      pathname: `/OneNews/${news.publishedAt}`,
                      state: { OneNews: news.title }
                    }}
                  >
                    View News
                  </Link>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
