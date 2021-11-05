

// import Homepage from './components/homepage/Homepage';
// import Login from './components/login/Login';
// import Register from './components/register/Register';
// import Home from "./components/Home/Home"
import { useState } from 'react'
import Homepage from './components/homepage/Homepage';
import Landing from './components/landing/Landing';
import Map from './components/Map/Map';
 import Dprofile from './components/Driver-profile/Dprofile'
 import Login from './components/login/Login';
 import Register from './components/register/Register';

 import {
   BrowserRouter as Router,
   Switch,
  Route,
  Link
} from "react-router-dom";



function App() {

  const [user, setLoginUser] = useState({})
  return (
    <div className="App">
       {/* <Dprofile/> */}
      
<Router>
<Switch>
<Route exact path="/" component={Landing}></Route>
<Route path="/map"component={Map} ></Route> 
<Route path="/dprofile"component={Dprofile} ></Route> 

{/* <Route path="/"  >
      {/* <Dprofile/> */}
     

      {/* <Router>
<Switch>
<Route exact path="/" component={Landing}></Route>
<Route path="/home"component={Home} ></Route> */}
      {/* <Route path="/"  >
  {
   
    user && user._id ?<Home />:<Login setLoginUser={setLoginUser}/>
    // user && user._id ?<Route path="/home" component ={Home}></Route>:<Route path="/login" component = {Login}></Route>
  }
  
</Route> */}

<Route  path="/login" >

<Login setLoginUser={setLoginUser }/>
</Route>

<Route path="/register" >
<Register/>
</Route>

</Switch>

</Router>
     {/* < Hero/>  */}
     {/* <Login/>    
     <Homepage/> */}

    </div>
  );
}

export default App;
