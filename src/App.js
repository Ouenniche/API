import { Route, Routes } from "react-router-dom";
import Details from "./components/Details";
import People from "./components/People";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<People />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}
