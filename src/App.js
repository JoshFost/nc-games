import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Reviews from "./components/Reviews";
import Categories from "./components/Categories";
import Header from "./components/Header";
import Nav from "./components/Nav";
import SingleReview from "./components/SingleReview";
import ReviewByCategory from "./components/ReviewByCategory";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route
          path="/reviews/:review_id"
          element={<SingleReview></SingleReview>}
        ></Route>
        <Route path="/categories" element={<Categories></Categories>}></Route>
        <Route
          path="/categories/:categorySlug/reviews"
          element={<ReviewByCategory></ReviewByCategory>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
