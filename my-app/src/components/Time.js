import React, { Component } from "react";

class Time extends Component {
  constructor() {
    super();
    this.state = {
      time: new Date(),
      user: "Christian",
      hour: 0,
    };
  }

  currentTime() {
    this.setState({
      time: new Date(),
      hour: this.state.time.getHours(),
    });
  }

  componentWillMount() {
    setInterval(() => this.currentTime(), 1000);
  }

  render() {
    return (
      <div>
        <h3 className="App-title pt-2">
          {" "}
          {this.state.hour < 12
            ? `Good Morning, ${this.state.user}`
            : this.state.hour > 12 && this.state.hour < 18
            ? `Good Afternoon, ${this.state.user}`
            : `Good Evening, ${this.state.user}`}{" "}
        </h3>

        <div>
          {" "}
          <h2>{this.state.time.toLocaleTimeString()}</h2>
        </div>

        <nav className="navbar navbar-expand-lg navbar navbar-light bg-light py-3">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link" href="bbc">
                BBC
              </a>
              <a className="nav-item nav-link" href="technology">
                Technology
              </a>
            </div>
            <form className="form-inline ">
              <input
                className="form-control mr-sm-2 ml-sm-5"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default Time;
