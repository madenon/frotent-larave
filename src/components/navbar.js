import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" >
        Navbar
      </Link>
      
      <div className="collapse navbar-collapse" id="navbarNav">
         <div className="container-fluid">
         <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/" className="nav-link" >
              Accueil 
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/create" className="nav-link" >
              Creer
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/edit" className="nav-link" >
              Modier
            </Link>
          </li>
          
        </ul>
         
         </div>
      </div>
    </nav>
  );
}


export default Navbar