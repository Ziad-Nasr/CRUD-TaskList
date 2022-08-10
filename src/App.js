import React from "react";
import "./ComponentsCSS/App.css";
import Todolist from "./Components/Todolist";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UpdatingPage from "./Components/UpdatingPage";
import Landing from "./Components/Landing";
import { ToastContainer } from "react-toastify";
import { BallTriangle } from "react-loader-spinner";

function App() {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return (
    <>
      <div className={loading ? "Loading" : "d-none"}>
        <BallTriangle className="LoadingSpinner" />
      </div>

      {/* <Header /> */}
      <ToastContainer theme="colored" />
      <Router>
        <Routes>
          <Route path="/Add" className="Lander" element={<Landing />} />
          <Route index element={<Todolist />} />
          <Route path="/Update" element={<UpdatingPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
