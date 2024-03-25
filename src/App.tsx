import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import MainPage from "./components/MainPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
