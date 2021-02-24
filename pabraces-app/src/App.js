import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Join from './components/Join';
import Contact from './components/Contact';
import About from './components/About';
import Programs from './components/Programs';
import Gallery from './components/Gallery';
import Why from './components/Why';
import './App.css';
//
function App() {
  // console.log('data from local ',JSON.parse(localStorage.getItem("currentState")).name)
    // isLoggedin();
  let loggedIn = null;
  if (localStorage.getItem("localData")) {
    loggedIn = JSON.parse(localStorage.getItem('localData')).token;
  }

  const wrongCode = () => {
    let person = prompt('*** Invalid response ***', 'Please enter correct access code *');
    if (person == null || person !== '6789') {
    wrongCode();
    }
  }
  const login = () => {
    let person = prompt('This Web App is in its development phase. \n A minimum access level code is required.', 'Enter code *')
  if (person == null || person !== '6789') {
    wrongCode();
  }
  else {
  }
  }
  return (
    <div>
      {/* { login() } */}

      <Router>
        <Navbar dataToChild = {loggedIn}/>
        <Switch>
          <Route path="/" render={(props) => {
            return (
              <div>
                <Home dataToChild = {loggedIn} />
              </div>
            )
          }} exact/>
          <Route path="/why" render={(props) => {
            return (
              <div>
                <Why dataToChild = {loggedIn} />
              </div>
            )
          }} exact/>
          <Route
            path={"/join"}
            render={props => (
              <Join dataToChild = {loggedIn} />
            )} exact/>
          <Route path={'/contact'}
            render={props => (
              <Contact dataToChild = {loggedIn} />
            )} exact />
          <Route path={'/about'} render={props =>  (
            <About dataToChild = {loggedIn} />
          )} exact />
          <Route path={'/programs'} render={props => (
            <Programs dataToChild = {loggedIn} />
          )} exact />
          <Route path={'/gallery'}
          render={props=> (
            <Gallery dataToChild = {loggedIn} />
          )} exact />
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
