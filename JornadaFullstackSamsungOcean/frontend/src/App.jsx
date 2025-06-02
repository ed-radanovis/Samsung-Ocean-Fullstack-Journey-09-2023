import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";

function App() {
  const [itens, setItens] = useState([]);
  // React's useState does two things:
  // 1. The state containing the value
  // 2. The function that updates the state value
  // When executed, the function also automatically re-renders the component

  async function carregarDadosApi() {
    const response = await fetch("https://rickandmortyapi.com/api/character/");

    const json = await response.json();

    const results = json.results;

    setItens(results);
  }

  // useEffect receives two pieces of information:
  // 1. Function containing the code that will be protected by useEffect
  // 2. Dependencies that control the execution of useEffect.
  // Empty array to execute only once

  useEffect(function () {
    carregarDadosApi();
  }, []);

  return (
    <>
      <Header />

      <div className="card-list">
        {itens.map(function (item, index) {
          return <Card item={item} key={`card_${index}`} />;
        })}
      </div>
    </>
  );
}

export default App;
