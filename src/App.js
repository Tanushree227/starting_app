import { Route, Routes } from "react-router-dom";
import Heading from "./components/Heading";
import List from "./components/List";
import Week2 from "./components/Week2";
import Week3 from "./components/Week3";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Heading firstName="Bob" name="Tanushree" />} />
        <Route path="/list" element={<List />} />
        <Route path="/week-2" element={<Week2 />} />
        <Route path="/week-3" element={<Week3 />} />
      </Routes>
    </div>
  );
}

export default App;
