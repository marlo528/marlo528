import NavBar from "./components/NavBar/NavBar";
import Luminaria from "./components/Luminaria/Luminaria";
import "./App.css";
import BoasVindas from "./components/BoasVindas/BoasVindas";
import PortFolio from "./components/PortFolio/PortFolio";
function App() {
  return (
    <>
      <main className="site">
        <NavBar />
        <Luminaria />
         <BoasVindas/>
         <PortFolio/>
      </main>
    </>
  );
}

export default App;
