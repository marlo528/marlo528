
import "./App.css";
import { useState, useEffect } from "react";

import NavBar from "./components/NavBar/NavBar";
import Luminaria from "./components/Luminaria/Luminaria";
import BoasVindas from "./components/BoasVindas/BoasVindas";
import PortFolio from "./components/PortFolio/PortFolio";

function App() {
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    function pegarScroll(){
      setScroll(window.scrollY)
    }

    window.addEventListener("scroll", pegarScroll)

    return () => {
      window.removeEventListener("scroll", pegarScroll)
    }
  }, [])



  return (
    <>
      <main className="site">
        <NavBar scroll={scroll} />
        <Luminaria scroll={scroll}/>
         <BoasVindas/>
         <PortFolio scroll={scroll}/>
      </main>
    </>
  );
}

export default App;
