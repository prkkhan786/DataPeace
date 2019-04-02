import React from 'react';
import { Link } from 'react-router-dom';

const Navigationbar = (props) => {

    return (  <div className="col m-2">
<div className="pos-f-t">
  <div className="collapse" id="navbarToggleExternalContent">
    <div className="bg-dark p-4">
      <h4 className="text-white">Collapsed content</h4>
      <span className="text-muted">Toggleable via the navbar brand.</span>
    </div>
  </div>
  <nav className="navbar navbar-dark bg-dark">
    <button className="navbar-toggler" 
    type="button" data-toggle="collapse" 
    data-target="#navbarToggleExternalContent" 
    aria-controls="navbarToggleExternalContent" 
    aria-expanded="false"
    aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <input type="button" value="Back" onClick={props.handBack} />
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active ml-5">
       <Link to="/">DATA <span className="sr-only">(current)</span></Link>
      </li>
      </ul>
  </nav>
</div>
    </div> );
}
export default Navigationbar;