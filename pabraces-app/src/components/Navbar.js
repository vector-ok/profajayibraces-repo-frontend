import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter, MDBBtn, MDBRow, MDBCol, MDBInput, MDBAlert } from "mdbreact";
import { BrowserRouter as Router, withRouter, Link } from 'react-router-dom';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import logo from '../assets/images/logo2.png';
import logo_alt from '../assets/images/logo.png';

class Navbar extends Component {
state = {
  name: '',
  email: '',
  password: '',
  key: '',
  joined: new Date(),
  submitError: false,
  modal1: false,
  loginForm: true,
  loggedIn: false,
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

toggle = nr => () => {
  let modalNumber = 'modal' + nr
  this.setState({
    [modalNumber]: !this.state[modalNumber]
  });
}

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

changeHandler = (e) => {
  e.preventDefault();
  this.setState({
    [e.target.name]: e.target.value
  })
}

toastSubmitPost = () => {
  toast.success("Success! Form submitted.")
}

signupSubmit = () => {
  axios.post('http://localhost:4000/admin/signup', this.state)
  .then(response => {
    if(response.status === 200){
      console.log('data posted - frontend', response);
      this.toastSubmitPost();
        this.setState({
          submitError: false,
          modal1: false
        });
        this.loginSubmit();
    } else {
      console.log('inside catch block');
      this.setState({
        submitError: true,
        // modal1: false
      });
    }
  })
  .catch(error => error)
  this.setState({
    submitError: true,
    // modal1: false
  });
}

loginSubmit = () => {
  axios.post('http://localhost:4000/admin/signin', this.state)
  .then(response => {
    if(response.status === 200){
      console.log('data posted - frontend', response.data.data);
      this.toastSubmitPost();
      localStorage.setItem("currentState", JSON.stringify(response.data.data));
        this.setState({
          submitError: false,
          loggedIn: true,
          modal1: false
        });
    } else {
      console.log('inside catch block');
      this.setState({
        submitError: true,
        // modal1: false
      });
    }
  })
  .catch(error => error)
  this.setState({
    submitError: true,
    // modal1: false
  });
}

logout = () => {
  this.setState({
    loggedIn: false
  })
  localStorage.clear();
  window.location.reload();
  // let name = JSON.parse(localStorage.getItem("localData")).user.name;
  // name.split(" ");
  // // console.log(name[0]);
  // return name[0];
}

render() {
  const { name, email, password, key} = this.state
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
             {
               this.state.loggedIn ?
                  <MDBNavItem>
                    <MDBDropdown>
                     <MDBDropdownToggle nav caret>
                    <MDBIcon icon="user" /> Admin
                     </MDBDropdownToggle>
                     <MDBDropdownMenu className="dropdown-default">
                    <MDBDropdownItem href="#!">
                      <div className="waves-effect waves-light" to="#!" onClick={this.logout}>
                      <MDBIcon icon="sign-out-alt" className="px-2" />
                      Logout
                      {/* <MDBBtn size="sm" color="white" outline>
                         Logout </MDBBtn> */}
                    </div>
                    </MDBDropdownItem>
                     </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavItem>
               :
               <MDBNavItem>
                 <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                 <MDBIcon icon="user" />
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className="dropdown-default">
                 <MDBDropdownItem href="#!">
                   <div className="waves-effect waves-light" to="#!" onClick={this.toggle(1)}>
                   <MDBIcon icon="sign-in-alt" className="px-2" />
                   login
                 </div>
                 </MDBDropdownItem>
                 {/* <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                 <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                 <MDBDropdownItem href="#!">Something else here</MDBDropdownItem> */}

                  </MDBDropdownMenu>
                 </MDBDropdown>
               </MDBNavItem>
             }
           </MDBNavbarNav>

           {/* login modal */}
           <MDBModal isOpen={this.state.modal1} toggle={this.toggle(1)} centered>
      <MDBModalHeader toggle={this.toggle(1)}
        titleClass="d-inline title"
        className="text-center light-blue darken-3 white-text px-2">
          <MDBIcon icon="user" classname="pr-2" />
          &nbsp; Admin
      </MDBModalHeader>
      <MDBModalBody>
        <MDBRow>
    <MDBCol>
      <form>
      <div className="text-center">
        <MDBBtn color="white" onClick={() => this.setState({loginForm: true})}>Login</MDBBtn>
        <MDBBtn color="primary" onClick={() => this.setState({loginForm: false})}>Sign up</MDBBtn>
      </div>
        {
          this.state.loginForm ?
          <div>
          <div className="grey-text">
            <MDBInput name="email" label="Type your email" icon="envelope" group type="email" validate error="wrong"
              success="right" className="black-text pl-5"
              onChange={this.changeHandler}
              value={email}/>
            <MDBInput name="password" label="Type your password" icon="lock" group type="password" validate  className="black-text pl-5"
            onChange={this.changeHandler}
            value={password} />
          </div>
          <div className="text-center">
            {
              this.state.submitError === true ?
                <MDBAlert color="danger">
                  <strong>Oops!</strong> Something went wrong
                </MDBAlert> : null
            }
            <MDBBtn color="white"
            onClick={this.loginSubmit}>
              <MDBIcon icon="paper-plane" claassName="pr-2" />
              &nbsp; Login </MDBBtn>
          </div>
        </div>
        :
        <div>
          <div className="grey-text">
            <MDBInput name="name" label="Type your name" icon="user" group type="text" validate error="wrong"
              success="right" className="black-text pl-5"
              onChange={this.changeHandler}
              value={name} />
            <MDBInput name='email' label="Type your email" icon="envelope" group type="email" validate error="wrong"
              success="right" className="black-text pl-5"
              onChange={this.changeHandler}
              value={email} />
            <MDBInput name="password" label="Type your password" icon="lock" group type="password" validate className="black-text pl-5"
            onChange={this.changeHandler}
            value={password} />
            <MDBInput name="key" label="Enter key" icon="key" group type="text" validate error="wrong"
              success="right" className="black-text pl-5"
              onChange={this.changeHandler}
              value={key} />
          </div>
          <div className="text-center">
            {
              this.state.submitError === true ?
                <MDBAlert color="danger">
                  <strong>Oops!</strong> Something went wrong
                </MDBAlert> : null
            }
            <MDBBtn color="primary"
            onClick={this.signupSubmit}>
              <MDBIcon icon="paper-plane" claassName="pr-2" />
              &nbsp; Sign up </MDBBtn>
          </div>
        </div>
        }
      </form>
      <ToastContainer pauseOnFocusLoss={true} />
    </MDBCol>
  </MDBRow>
      </MDBModalBody>
    </MDBModal>
         </MDBCollapse>
       </MDBNavbar>
    // </Router>
    );
  }
}

export default withRouter(Navbar);
