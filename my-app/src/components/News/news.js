import React, { Component } from "react";
import NewSingle from "./NewSingle";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    };
  }

  componentDidMount() {
    const url =
      "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=43ef53f747b241d7a304bd92a8126b57";

    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          news: data.articles
        });
        console.log(this.state.news);
      })
      .catch(error => console.log(error));
  }

  renderItems() {
    return this.state.news.map(item => (
      <NewSingle key={item.title} item={item} />
    ));
  }

  render() {
    return <ul>{this.renderItems()}</ul>;
  }
}
export default News;
