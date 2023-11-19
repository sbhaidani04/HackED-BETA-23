import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Home.js';
import Main from './Main.js';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/main" element={<Main/>}/>
      </Routes>
    </BrowserRouter>
  );
}