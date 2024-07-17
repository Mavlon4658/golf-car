import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import AppRoutes from "./routes";

function App() {

  return (
    <div className="wrapper">
      <AppRoutes />
    </div>
  )
}

export default App
