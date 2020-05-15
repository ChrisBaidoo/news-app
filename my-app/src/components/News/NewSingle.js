import React from "react";

const NewsSingle = ({ item }) => (
  <div className="col s4">

    <div className="card">
      
      <div className="card-img-top">
        <img src={item.urlToImage} alt={item.title} />
        <span className="card-title">{item.source.name}</span>
      </div>

      <div className="card-content">
        <p>{item.title}</p>
      </div>

      <div className="card">
        <input type="button" className="btn btn-primary">
        </input>
        <a href={item.url} target="_blank"  rel="noopener noreferrer">
            Full article
          </a>
      </div>

    </div>

  </div>
);

export default NewsSingle;
