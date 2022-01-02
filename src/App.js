import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home';
import CategoryItems from './Pages/CategoryItems';
function App() {
  return (
    <div className="App">
      <Link to="/"><h1>Welcome to Fake Store</h1></Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="category/:categoryName" element={<CategoryItems />} />
      </Routes>
    </div>
  );
}

export default App;