import { Link, Route, Routes } from "react-router-dom";
import Heading from "./components/Heading";
import List from "./components/List";
import Week2 from "./components/Week2";
import Week3 from "./components/Week3";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" to="/">
                Home
              </Link>
              <Link className="nav-link active" to="/list">
                List
              </Link>
              <Link className="nav-link active" to="/week-2">
                Week 2
              </Link>
              <Link className="nav-link active" to="/week-3">
                Week 3
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <Routes>
        <Route
          path="/"
          element={<Heading firstName="Bob" name="Tanushree" />}
        />
        <Route path="/list" element={<List />} />
        <Route path="/week-2" element={<Week2 />} />
        <Route path="/week-3" element={<Week3 />} />
      </Routes>
    </div>
  );
}

export default App;
