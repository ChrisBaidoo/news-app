import React, { Component } from "react";
import NewSingle from "./NewSingle";
import { v4 as uuidv4 } from 'uuid'

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    };
  }

  componentDidMount() {
    const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=43ef53f747b241d7a304bd92a8126b57`;

    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          news: data.articles.slice(0,10)
        });
      })
      .catch(error => console.log(error));
  }

  renderNewsItems() {
    return this.state.news.map(item => (
      <NewSingle key={uuidv4()} item={item} />
    ));
  }

  render() {
    return <div className="row">{this.renderNewsItems()}</div>;
  }
}
export default News;
