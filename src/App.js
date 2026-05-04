import { useState } from "react";
import data from "./data";
import BotaoNext from "./BotaoNext";
import Titulo from "./Titulo";
import BotaoDetalhes from "./BotaoDetalhes";
import Imagem from "./Imagem";
import "./App.css";

function App() {
  const [index, setIndex] = useState(0);
  const [mostrar, setMostrar] = useState(false);

  function next() {
    setIndex((index + 1) % data.length);
    setMostrar(false);
  }

  function toggle() {
    setMostrar(!mostrar);
  }

  return (
    <div className="container">

      <div className="linha"></div>

      <div className="box">
        <BotaoNext onClick={next} />

        <Titulo
          titulo={data[index].name + " by " + data[index].artist}
          index={index + 1}
          total={data.length}
        />

        <BotaoDetalhes onClick={toggle} />

        <Imagem imagem={data[index].url} mostrar={mostrar} />
      </div>
    </div>
  );
}

export default App;