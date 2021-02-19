import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { BrowserRouter as Router, withRouter, Link } from 'react-router-dom';

import logo from '../assets/images/logo2.png';
import logo_alt from '../assets/images/logo.png';

class Navbar extends Component {
state = {
  isOpen: false,
  home: false,
  // home2: false,
  about: false,
  programs: false,
  join: false,
  gallery: false,
  contact: false,
  programActive: ''
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

handleStyle = (nr) => (e) => {
  e.preventDefault();
  this.toggleCollapse();
  if(nr === 1) {
    this.setState({
      home: true,
      about: false,
      programs: false,
      join: false,
      gallery: false,
      contact: false
    });
    this.props.history.push('/')
  }
  // if(nr === 7) {
  //   this.setState({
  //     home: false,
  //     home2: true,
  //     about: false,
  //     programs: false,
  //     join: false,
  //     gallery: false,
  //     contact: false
  //   });
  //   this.props.history.push('/home2');
  // }
  if(nr === 2) {
    this.setState({
      home: false,
      home2: false,
      about: true,
      programs: false,
      join: false,
      gallery: false,
      contact: false
    });
    this.props.history.push('/about');
  }
  if(nr === 3) {
    this.setState({
      home: false,
      home2: false,
      about: false,
      programs: true,
      join: false,
      gallery: false,
      contact: false
    });
    this.props.history.push('/programs');
  }
  if(nr === 4) {
    this.setState({
      home: false,
      home2: false,
      about: false,
      programs: false,
      join: true,
      gallery: false,
      contact: false
    });
    this.props.history.push('/join');
  }
  if(nr === 5) {
    this.setState({
      home: false,
      home2: false,
      about: false,
      programs: false,
      join: false,
      gallery: true,
      contact: false
    });
    this.props.history.push('/gallery');
  }
  if(nr === 6) {
    this.setState({
      home: false,
      home2: false,
      about: false,
      programs: false,
      join: false,
      gallery: false,
      contact: true
    });
    this.props.history.push('/contact');
  }
}

render() {
  return (
     // <Router>
     <MDBNavbar color="rgba-stylish-light" fixed="top" dark expand="lg" scrolling transparent>
       {/* <MDBNavbar color="rgba-stylish-strong" fixed="top" dark expand="lg" scrolling className="d-block d-lg-none"> */}
       <MDBNavbarBrand>
         <img src={ logo } alt="Foundation's logo" className="w-50 img-fluid mr-3" />
         {/* <img className="d-block d-sm-none w-25 img-responsive mr-3" src={logo_alt} alt="Foundation's logo" /> */}
         {/* <strong className="white-text">Tech101</strong> */}
       </MDBNavbarBrand>
       <MDBNavbarToggler onClick={this.toggleCollapse} />
       <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar className="transparent-bg-strong">
         <MDBNavbarNav left>
           {this.state.home === true ?
             <MDBNavItem active className="mr-3">
               <MDBNavLink to="/" onClick={this.handleStyle(1)}>Home</MDBNavLink>
             </MDBNavItem> :
             <MDBNavItem className="mr-3">
               <MDBNavLink to="/" onClick={this.handleStyle(1)}>Home</MDBNavLink>
             </MDBNavItem>}

           {/* {this.state.home2 === true ?
               <MDBNavItem active className="mr-3">
             <MDBNavLink to="/" onClick={this.handleStyle(7)}>Home2</MDBNavLink>
               </MDBNavItem> :
               <MDBNavItem className="mr-3">
             <MDBNavLink to="/" onClick={this.handleStyle(7)}>Home2</MDBNavLink>
           </MDBNavItem>} */}

           {this.state.about === true ?
             <MDBNavItem active className="mr-3">
               <MDBNavLink to="#!" onClick={this.handleStyle(2)}>About</MDBNavLink>
             </MDBNavItem> :
             <MDBNavItem className="mr-3">
               <MDBNavLink to="#!" onClick={this.handleStyle(2)}>About</MDBNavLink>
             </MDBNavItem>}

           { this.state.programs === true ?
             <MDBNavItem active className="mr-3">
               <MDBNavLink to="#!" onClick={this.handleStyle(3)}>Programs</MDBNavLink>
             </MDBNavItem> :
             <MDBNavItem className="mr-3">
               <MDBNavLink to="#!" onClick={this.handleStyle(3)}>Programs</MDBNavLink>
             </MDBNavItem>}

           {this.state.join === true ?
             <MDBNavItem active className="mr-3">
               <MDBNavLink to="/Join" onClick={this.handleStyle(4)}>Join</MDBNavLink>
             </MDBNavItem> :
             <MDBNavItem className="mr-3">
               <MDBNavLink to="/Join" onClick={this.handleStyle(4)}>Join</MDBNavLink>
             </MDBNavItem>}

           {this.state.gallery === true ?
             <MDBNavItem active className="mr-3">
               <MDBNavLink to="#!" onClick={this.handleStyle(5)}>Gallery</MDBNavLink>
             </MDBNavItem> :
             <MDBNavItem className="mr-3">
               <MDBNavLink to="#!" onClick={this.handleStyle(5)}> Gallery </MDBNavLink>
             </MDBNavItem>}

           {this.state.contact === true ?
             <MDBNavItem active className="mr-3">
               <MDBNavLink to="/Contact" onClick={this.handleStyle(6)}>Contact </MDBNavLink>
             </MDBNavItem> : <MDBNavItem className="mr-3">
               <MDBNavLink to="#!" onClick={this.handleStyle(6)}>Contact </MDBNavLink>
             </MDBNavItem>}
           {/* <MDBNavItem>
               <MDBDropdown>
               <MDBDropdownToggle nav caret>
               <div className="d-none d-md-inline">Dropdown</div>
               </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
               <MDBDropdownItem href="#!">Action</MDBDropdownItem>
               <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
               <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
               <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
               </MDBDropdown>
             </MDBNavItem> */}
           </MDBNavbarNav>
           <MDBNavbarNav right>
             <MDBNavItem>
               <MDBNavLink className="waves-effect waves-light" to="#!">
                 <MDBIcon fab icon="facebook" />
               </MDBNavLink>
             </MDBNavItem>
             <MDBNavItem>
               <MDBNavLink className="waves-effect waves-light" to="#!" onClick={() =>
                   window.open("https://twitter.com/BracesProf", "_blank") }>
                 <MDBIcon fab icon="twitter" />
               </MDBNavLink>
             </MDBNavItem>
             <MDBNavItem>
               <MDBNavLink className="waves-effect waves-light" to="#!" onClick={() => window.open("https://www.instagram.com/profajayibraces/", "_blank")}>
                 <MDBIcon fab icon="instagram" />
               </MDBNavLink>
             </MDBNavItem>
             {/* <MDBNavItem>
               <MDBDropdown>
                <MDBDropdownToggle nav caret>
               <MDBIcon icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
               <MDBDropdownItem href="#!">login</MDBDropdownItem>
               <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
               <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
               <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
               </MDBDropdown>
             </MDBNavItem> */}
           </MDBNavbarNav>
         </MDBCollapse>
       </MDBNavbar>
    // </Router>
    );
  }
}

export default withRouter(Navbar);
