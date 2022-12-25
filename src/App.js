import "./App.css";
import { NavBar } from "./component/NavBar";
import TextForm from "./component/TextForm";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/textform" element={<TextForm />} />
      </Routes>
    </div>
  );
}

export default App;
