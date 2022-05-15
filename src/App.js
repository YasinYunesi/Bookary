// React
import { useContext } from "react";
// React router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Context
import { AppContext } from "./context/Context";
// Components / Screens
import HomeScreen from "./screens/HomeScreen";
import SignUpScreen from "./screens/SignUpScreen";
import NotFoundScreen from "./screens/NotFoundScreen";

function App() {
  // Getting user from context
  const { user } = useContext(AppContext);
  // Getting user from local storage
  const userLS = localStorage.getItem("User");

  // JSX ////////////////////////////////
  return (
    <div className="bg-smoke_white">
      <Router>
        <Routes>
          <Route path="/" element={userLS || user?.length !== 0 ? <HomeScreen /> : <SignUpScreen />} />
          {(userLS || user?.length !== 0) && <Route path="/sign-up" element={<SignUpScreen />} />}
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
