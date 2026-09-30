import NavBar from "./components/NavBar/NavBar";
import Luminaria from "./components/Luminaria/Luminaria";
import "./App.css";
import BoasVindas from "./components/BoasVindas/BoasVindas";
function App() {
  return (
    <>
      <main className="site">
        <NavBar />
        <Luminaria />
         <BoasVindas></BoasVindas>
      </main>
    </>
  );
}

export default App;
