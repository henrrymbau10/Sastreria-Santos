import "./App.css";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { Main } from "./Components/Main/Main";
import { Servicios } from "./Components/Servicios/Servicios";
import { Us } from "./Components/Us/Us";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Us />
      <Servicios />
      <Footer />
    </div>
  );
}

export default App;
