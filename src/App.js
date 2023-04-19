import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogInPage from "./pages/LogInPage";
import NoPage from "./pages/NoPage";
import HomePage from "./pages/HomePage";
import ReviewPage from "./pages/ReviewPage";
import OrderPage from "./pages/OrderPage";
import UserPage from "./pages/UserPage";
import FoodPage from "./pages/FoodPage";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<LogInPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/review" element={<ReviewPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/food" element={<FoodPage />} />
          <Route path="/home/category" element={<CategoryPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
