import { Routes, Route, BrowserRouter } from "react-router-dom";
import AddMovies from "./pages/addMovies";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addmovies" element={<AddMovies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
