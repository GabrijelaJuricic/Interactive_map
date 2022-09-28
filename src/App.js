import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MyMap from "./Components/MyMap";
import Table from "./Components/Table";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyMap />}></Route>
        <Route path="/table" element={<Table />}></Route>
      </Routes>
      <div className="btn-group" role="group" aria-label="Basic example">
        <Link to="/" className="link">
          <button type="button" className="btn btn-secondary">
            Karta
          </button>
        </Link>
        <Link to="/table" className="link">
          <button type="button" className="btn btn-secondary">
            Tablica
          </button>
        </Link>
      </div>
    </Router>
  );
};

export default App;
