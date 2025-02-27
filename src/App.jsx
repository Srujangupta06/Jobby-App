import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Jobs from "./routes/Jobs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/explore-jobs" element={<Jobs />} />
      <Route path="*" element={<h1>Not Found Page</h1>}/>
    </Routes>
  );
}

export default App;
