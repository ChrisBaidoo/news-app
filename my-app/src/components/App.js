import React, { Component } from "react";
import "./App.css";
import News from "./News/news";
import Time from "./Time";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news1: {
        type: "top-headlines",
        query: "sources=bbc-news"
      },
      news2: {
        type: "everything",
        query: "domains=engadget.com,techcrunch.com&language=en"
      },
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Time/>
        </header>
        <div id='bbc'>
        <h1 className="text-center">BBC</h1>
        <News news={this.state.news1} />
        </div>
        <div id='technology'>
          <h1 className="text-center">Technology</h1>
        <News news={this.state.news2} />
        </div>


        
      </div>
    );
  }
}

export default App;







