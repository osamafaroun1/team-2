import "./NavBar.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/Layer 2.svg";
import DropDown from "../DropDown/DropDown";
import ButtonLanguge from "../ButtonLanguge/ButtonLanguge";
import ButtonNotifcation from "../ButtonNotifcation/ButtonNotifcation";
import icon from "../ButtonNotifcation/img/User-60.svg";
import { NavLink } from "react-router-dom";

const NavJobCompanyLogin = () => {
  return (
    <Navbar expand="lg" className="rn-navbar">
      <Navbar.Brand className="rn-logo-focal" href="#home">
        <img src={logo} alt="Foca X" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="rn-nav">
        <DropDown
            name="Home"
            option1="What is focal App"
            to1="/"
            option2="Who We are?"
            to2="/"
            option3="Lat's Talk"
            to3="/"
          />
          <DropDown
            name="Jobs"
            to1='/ManageJob'
            option1="Manage Jobs"
            to2='/AddJob'
            option2="Add Job"
            option3="Search Employee"
            option4="Wallet"
          />
          <DropDown
            name="Freelance"
            option1="Search Project"
            option2="Search Services"
            option3="Add Project"
          />
        <DropDown
            name="Blog"
            to1='/businessOwnerProfile/blogs'
            option1="Search Blog"
            option2="Add Blog"
            option3="Saved Blogs"
          />
          <DropDown name="Internship" />
          <DropDown name="Ads" />
          <NavLink className="RA-HER" >Hir Us</NavLink>
        </Nav>
        <ButtonNotifcation icon={icon} pofile="/businessOwnerProfile" />
        <ButtonLanguge />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavJobCompanyLogin;
