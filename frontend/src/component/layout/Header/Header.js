import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo1.png";

// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import 'bootstrap/dist/css/bootstrap.css';
const options = {
  burgerColorHover: "#eb4034",
  logo,
  logoWidth: "20vmax",
  logoTransition:"0.5",
  logoHeight: "10vmax",
  navColor1: "white",
  logoHoverSize: "10px",
  logoHoverColor: "#eb4034",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "2vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  nav1justifyContent: "space-around",
  nav2justifyContent: "space-around",
  nav3justifyContent: "space-around",
  nav4justifyContent: "space-around",
  link1Border: "0",
  link2Border: "0",
  link3Border: "0",
  link4Border: "0",
  link1Padding: "0",
  link2Padding: "0",
  link3Padding: "0",
  link4Padding: "0",
  link1Family: "Blippo, fantasy ",
  link1ColorHover: "#eb4034",
  link1Margin: "0.4vmax",
  profileIconUrl: "/login",
  profileIconColor: "rgba(35, 35, 35,0.8)",
  searchIconColor: "rgba(35, 35, 35,0.8)",
  cartIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColorHover: "#eb4034",
  searchIconColorHover: "#eb4034",
  cartIconColorHover: "#eb4034",
  cartIconMargin: "1vmax",
};

const Header = () => {
  return <ReactNavbar {...options} />;
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//     <div className="container-fluid">
//         <Link className="navbar-brand" to="/">iNotebook</Link>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                 <li className="nav-item">
//                     <Link className={`nav-link ${location.pathname==="/"? "active": ""}`} aria-current="page" to="/">Home</Link>
//                 </li>
//                 <li className="nav-item">
//                     <Link className={`nav-link ${location.pathname==="/about"? "active": ""}`} to="/about">About</Link>
//                 </li>

//             </ul>
//             <form className="d-flex"> 
//             <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
//             <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
//             </form>
//         </div>
//     </div>
// </nav>
//   );
  
}

export default Header;
