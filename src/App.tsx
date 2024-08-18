import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "@/pages/Home";
import MainPage from "@/pages/Main";
import LayoutPage from "@/pages/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPage />} />
        <Route path="main" element={<MainPage />} />
        <Route path="home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
