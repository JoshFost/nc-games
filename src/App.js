import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Reviews from "./components/Reviews";
import Categories from "./components/Categories";
import Header from "./components/Header";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/categories" element={<Categories></Categories>}></Route>
      </Routes>
    </div>
  );
}

export default App;
