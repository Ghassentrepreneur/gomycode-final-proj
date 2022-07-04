import  HomePage from "./Pages/HomePage"
import {BrowserRouter as Router,Route,Switch}from 'react-router-dom'
import Contact from "./Pages/Contact";
import Project from "./Pages/Project";
import About from "./Pages/About";
import GetContacts from "./Pages/GetContacts";
import NavBar from "./Pages/NavBar";
import SignIn from "./Pages/SignIn";

function App() {
  
  
   return (
    <div   className="container-fluid">
   <div className="row">  
  
   <Router>
   
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route  path="/Contact" component={Contact} />
        <Route  path="/Project" component={Project} />
      
        <Route  path="/About"  component={About} />
        <Route path='/GetContacts' component={GetContacts}/>
        <Route  path="/SignIn"  component={SignIn} />
      
   

      
      </Switch>
      </Router>
</div>
      </div>
     )
}

export default App;



