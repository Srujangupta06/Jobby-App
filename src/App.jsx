import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Jobs from "./routes/Jobs";
import SpecificJobDetails from "./routes/SpecificJobDetails";
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/explore-jobs" element={<Jobs />} />
      <Route path="/explore-jobs/:id" element={<SpecificJobDetails />} />
      <Route path="*" element={<h1>Not Found Page</h1>} />
    </Routes>
  );
}

export default App;
