import { useState, useEffect } from "react";
import axios from "axios";
import Nav from "../components/nav";
import Cartao from "../components/cartao";

export default function IndexPage() {
  const [filmes, setFilmes] = useState([]);
  
  export const getMovie = async (id) => {
    const { data } = await axios.get(`https://swapi.dev/api/films/${id}/`);
    return data;
  };

  export const getPeople = async (id) => {
    const { data } = await axios.get(
      `https://swapi.dev/api/people/${id}/?format=json`
    );
    return data;
  };


  return (
    <div>
      <Nav />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        <Cartao titulo={item.title} imagem={item.image} />
      </div>
    </div>
  );
}
