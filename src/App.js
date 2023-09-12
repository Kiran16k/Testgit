import "./App.css";
// import Counter from "./components/Counter";
// import Parent from "./components/Parent";
import "./components/nav.css";
import Body from "./components/body";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Article from "./components/article";
import Footer from "./components/footer";
import Aside from "./components/aside";
function App() {
  return (
    <div className="App">
      {/* <Parent /> */}
      {/* <Counter /> */}
      <Header />
      <Navbar />
      <main>
        <Body />
        <Article />
        <Aside />
      </main>
      <Footer />
    </div>
  );
}

export default App;
