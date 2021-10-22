

import Homepage from './components/homepage/Homepage';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Home from "./components/Home/Home"
import {useState} from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  const [user, setLoginUser]= useState({})
  return (
    <div className="App">
      {/* <Homepage/> */}
      <Home/>
      {/* <Router>
<Switch>
<Route  exact path="/" >
  {
    user && user._id ?<Homepage setLoginUser={setLoginUser}/>:<Login setLoginUser={setLoginUser}/>
  }
  
</Route>

<Route path="/login" >

<Login setLoginUser={setLoginUser }/>
</Route>

<Route path="/register" >
<Register/>
</Route>

</Switch>

</Router> */}
     {/* < Hero/>  */}
     {/* <Login/>    
     <Homepage/> */}
      
    </div>
  );
}

export default App;
