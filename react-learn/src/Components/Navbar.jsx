import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  const navigate = useNavigate();
  function setFunction() {
    // Can made any api call before loading page
    navigate("/users");
  }
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-links">
          <Link to="/">Home</Link>
          <li onClick={setFunction}>Users</li>
          {/* <Link to="/users">Users</Link> */}
          <Link to="/contact">Contact</Link>
          <Link to="/reduxUser">Redux-User</Link>
          <Link to="/apiCall">API-call</Link>
          <Link to="/portal">Portal</Link>
          <Link to="/higher">HOC</Link>
          <Link to="/errorboundaryComponent">Errorboundary</Link>
          <Link to="/todo">To-Do</Link>

        </ul>
      </nav>
    </>
  );
}
