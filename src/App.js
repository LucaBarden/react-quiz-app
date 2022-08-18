import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FinalScreen from "./pages/FinalScreen";
import Questions from "./pages/Questions";
import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Settings />}>
        </Route>
        <Route path="/questions" element={<Questions />}>
        </Route>
        <Route path="/score" element={<FinalScreen />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
