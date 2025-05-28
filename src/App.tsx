import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";
const App = () => {
  const token = localStorage.getItem("token");

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={token ? <Navigate to="/home" /> : <Navigate to="/signin" />}
        />
        <Route
          path="/signin"
          element={token ? <Navigate to="/home" /> : <Signin />}
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
