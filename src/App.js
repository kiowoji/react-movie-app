import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./styles.css";
import "./layouts/Sidebar";
import HomePage from "./pages/HomePage";
import TrendingPage from "./pages/TrendingPage";
import SearchPage from "./pages/SearchPage";
import ComingSoonPage from "./pages/ComingSoonPage";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/trending" element={<TrendingPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/coming-soon" element={<ComingSoonPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
