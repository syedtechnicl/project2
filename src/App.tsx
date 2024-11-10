import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Leaarning from "./Components/Learning";
import Login from "./Components/Login";
import Quiz from "./Components/Quiz";
import Result from "./Components/Result";
import { Suspense } from "react";
import Loader from "./Components/Loader";
const App = () => {
  return (
    <Router>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Learning" element={<Leaarning />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Quiz" element={<Quiz />} />
          <Route path="/Result" element={<Result />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
