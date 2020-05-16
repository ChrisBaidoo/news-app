import React from "react";

const NewsSingle = ({ item }) => (
  <div className="main ">

    <div className="card text-center bg-light mb-3 each-card">
      
      <div className="card-body">
        <img  className="card-img-top"src={item.urlToImage} alt={item.title} style={{}} />
        <span className="card-title">{item.source.name}</span>
      </div>

      <div className="card-content">
        <p className="card-text">{item.title}</p>
      </div>

      <div className="">
        <a className="btn btn-outline-primary m-3" href={item.url} target="_blank"  rel="noopener noreferrer" role="button">Full article</a>

       
      </div>

    </div>

  </div>
);

export default NewsSingle;
