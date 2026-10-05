import {link} from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">home</Link>
      <Link to="/dashboard">dashboard</Link>
      <Link to="/profile">profile</Link>
    </nav>
  )
}