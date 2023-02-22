import "./App.css";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Home from "./page/Home";
import MovieDetails from "./page/MovieDetails/MovieDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/Movie-Search/">
        <div className="app">
          <Switch>
            <Route path="/" element={<Home />} />
            <Route path={`/movies/:id`} element={<MovieDetails />} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
