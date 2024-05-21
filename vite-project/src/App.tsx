import "./App.css";
import { Outlet, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header style={{ background: "red" }}>
        <button>
          <NavLink to="/">Home</NavLink>
        </button>

        <ul>
          <li>
            <NavLink to="about">About</NavLink>
          </li>
          <li>
            <NavLink to="contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="faq">FAQ</NavLink>
          </li>
        </ul>
      </header>

      <Outlet />
      <footer style={{ background: "green" }}>Footer</footer>
    </div>
  );
}

export default App;
