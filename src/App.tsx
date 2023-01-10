import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Playground from "./pages/Playground";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Error />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/playground" element={<Playground />} />
    </Routes>
  );
}

export default App;
