//import {link} from "react-router-dom";
//
//function Navbar() {
  //return (
    //<nav>
      //<Link to="/">home</Link>
     // <Link to="/dashboard">dashboard</Link>
       // <Link to="/profile">profile</Link>
    //</nav>
  //)
//}


   // export default Navbar;


   //example mini project
   import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
   import Home from "./Home";
   import About from "./About";
   import Dashboard from "./Dashboard";
   import Profile from "./Profile";
   import PageNotFound from "./PageNotFound";

   function app() {
        return (
            <browserrouter>
            <navbar/>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            </browserrouter>
        )
   }
            export default app

