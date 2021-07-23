import React, { useState } from 'react'
import {Cards} from './Components/Cards';
import Home from './Components/home';
import Contact from './Components/contact';
import About from './Components/about';
import Person from './Components/person';
import Signin from './Components/signin';
import Signup from './Components/signup';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
//browserrouter enables routing, makes sure routing is present
//Switch for similar switch js

const App = () => {
  const [show, setShow] = useState(true);
  return ( <div>    
    <BrowserRouter>
    <div>
      <Link to="/">Home</Link> {/*the to and path will be same to place effects */}
      <br/>
      <Link to="/contact">Contact</Link>
      <br/>
      <Link to="/about">About</Link>
      <br/>
      <Link to="/signin">SignIn</Link>
      <br/>
      <Link to="/signup">SignUp</Link>
    </div>
    <button onClick={() => setShow(!show)} >Show/Hide</button> {/* will start component will unmount */}
    {show ? <Cards /> : ""}

    <Switch>
      <Route path="/" exact component={Home} /> {/*/ is default will always show on page load without click, rememeber to add exact */}
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={() => (
        <div>
          <Contact />
          <About />
        </div>
      )} /> {/*to add multiple component, remeber to add that link */}
      <Route path="/signin" component={Signin}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/person/:id" component={Person} />
    
      <Route component={() => <h1>404- page not found</h1>}/> {/*if user tries to go to unknown or undefined page */}
    </Switch>

    </BrowserRouter>
  </div> );
}

 

export default App;
