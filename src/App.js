// React router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Context
import StateProvider from "./context/Context";
// Components / Screens
import HomeScreen from "./screens/HomeScreen";
import SignUpScreen from "./screens/SignUpScreen";
import NotFoundScreen from "./screens/NotFoundScreen";

function App() {
  return (
    <StateProvider>
      <div className="bg-smoke_white">
        <Router>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/sign-up" element={<SignUpScreen />} />
            <Route path="*" element={<NotFoundScreen />} />
          </Routes>
        </Router>
      </div>
    </StateProvider>
  );
}

export default App;
