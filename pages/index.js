import { useState, useEffect } from "react";
import axios from "axios";
import Nav from "../components/nav";
import Cartao from "../components/cartao";

export default function IndexPage() {
  const [filmes, setFilmes] = useState([]);

  const getMovie = async (id) => {
    try {
      const data = await axios.get(`https://swapi.dev/api/films/1/`);
      setFilmes(data);
    } catch (error) {
      console.log("Deu ruim ->", error);
    }
  };
  useEffect(() => {
    getMovie();
  }, []);
  console.log(filmes);
  return (
    <div>
      <Nav />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {filmes.map((item) => (
          <div className="flex flex-col m-4 h-60 w-72 shadow-lg md:h-72 md:w-96">
            <div className="flex flex-row h-9/12 rounded-t-lg pt-10 px-4">
              <div className="flex flex-1 mx-3">
                <img
                  className="rounded-full object-center h-24 w-28 md:h-32 md:w-32 shadow-lg"
                  src={{ uri: item.image }}
                />
              </div>
              <div className="flex flex-1 flex-col">
                <h1 className="text-blue-900 font-bold text-xl mb-2">
                  {item.title}
                </h1>
                <h1 className="text-blue-900 font-bold text-xl mb-2">
                  nome do diretor
                </h1>
                <p className="text-gray-700 text-base">nome do produtor</p>
                <p className="text-gray-700 text-base">numero do filme</p>
                <p className="text-gray-700 text-base">data de lancamento</p>
              </div>
            </div>
            <div className="flex flex-row h-3/12 items-center justify-end rounded-b-lg">
              <button
                href="/"
                className="py-3 px-4 focus:outline-none focus:shadow-outline w-5 shadow-lg"
              >
                Ver Personagens
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

{
  /* <Cartao 
  titulo={item.title} 
  imagem={item.image}
/> */
}
