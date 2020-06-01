import React from 'react'

export default function NavBar() {
    return (
        <div> 
          
         <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark ">

         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
         </button>

  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link" href="bbc">BBC</a>
      <a className="nav-item nav-link" href="technology">Technology</a>
    </div>
    <form className="form-inline">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
  </div>
</nav>




</div>
    )
}
