import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Navbar, PredictionsComponent } from "./compoents";
import { Gestures } from "./pages";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gestures" element={<Gestures />} />
        <Route path="/prediction" element={<PredictionsComponent />} />
      </Routes>
    </Router>
  );
}; 

export default App;