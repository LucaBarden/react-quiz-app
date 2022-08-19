import { Box, Container } from "@mui/system";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FinalScreen from "./pages/FinalScreen";
import Questions from "./pages/Questions";
import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <div>
                  <Settings />
                </div>
              }
            ></Route>
            <Route path="/questions" element={<Questions />}></Route>
            <Route path="/score" element={<FinalScreen />}></Route>
          </Routes>
        </Box>
      </Container>
    </Router>
  );
}

export default App;
