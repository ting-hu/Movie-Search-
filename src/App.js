import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import MovieDetails from "./page/MovieDetails/MovieDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path={`/movies/:id`} element={<MovieDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
