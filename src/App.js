import HomePage from "./pages/HomePage/HomePage";
import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import  MenuPage  from "./pages/MenuPage/MenuPage";
import CartPage from "./pages/CartPage/CartPage";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/menu" exact element={<MenuPage />} />
          <Route path="/cart" exact element={<CartPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
