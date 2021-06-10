import Header from "./components/header/Header.js";
import Footer from "./components/footer/Footer.js";
import Yorum from "./components/yorum/Yorum.js";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container-yorum">
        <Yorum indeks="0" />
        <Yorum indeks="1" />
        <Yorum indeks="2" />
        <Yorum indeks="3" />
      </div>
      <Footer />
    </div>
  );
}
export default App;
