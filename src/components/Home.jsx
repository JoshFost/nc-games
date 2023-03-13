import Header from "./Header";
import Nav from "./Nav";

const Home = () => {
  return (
    <div className="home">
      <Header></Header>
      <Nav></Nav>
      <img src="src/nc-games-logo.png" className="logo" />
    </div>
  );
};

export default Home;
