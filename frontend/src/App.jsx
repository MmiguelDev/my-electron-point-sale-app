import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./components/Layout.jsx";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}