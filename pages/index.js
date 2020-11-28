import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import Header from "../components/Header";
import { imgFilmes } from "../images/Imagens";
import moment from "moment";

export default function IndexPage() {
  const [filmes, setFilmes] = useState([]);

  const getMovies = async () => {
    const response = await axios
      .get(`https://swapi.dev/api/films/`)
      .catch((err) => console.log("Erro:", err));
    setFilmes(response.data.results);
  };

  useEffect(() => {
    getMovies();
  }, []);
  //console.log("Filmes:", imgFilmes[1]);

  return (
    <div className="flex flex-1 flex-col justify-center items-center bg-black">
      <Header titulo="Filmes" />
      <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {filmes.map((item, id) => {
          const linkImage = imgFilmes[id]; //pega o array dos links das imagens associando com id do array da api
          return (
            <div
              className="lg:flex bg-white rounded-xl shadow-md m-10"
              key={id}
            >
              <div className="lg:flex">
                <div className="flex flex-1 bg-black lg:bg-white justify-center lg:justify-start">
                  <img
                    src={linkImage}
                    alt="Picture of the author"
                    className="max-h-64 lg:max-h-72 xl:max-h-full object-cover"
                  />
                </div>
                <div className="flex flex-1">
                  <div className="p-4 ">
                    <div className="text-xl font-bold mb-5">
                      Star Wars {item.episode_id}: {item.title}
                    </div>
                    <div className="text-md">Diretor: {item.director}</div>
                    <div className="text-md">Produtor: {item.producer}</div>
                    <div className="text-md mb-5">
                      Lançamento:{" "}
                      {moment(item.release_date).format("DD/MM/YYYY")}
                    </div>
                    <div className="mb-2">
                      <Link
                        as={"/personagens/" + item.title} //apelido na url ficar com o nome do filme
                        href={{
                          pathname: `/[personagens]`, //encaminha para a tela personagens
                          query: {
                            personagens: `${id}`, //manda o id respectivo ao filme selecionado
                            peopleId: filmes[id].characters, // manda os personagens respectivos ao filme selecionado
                          },
                        }}
                      >
                        <a className="font-bold leading-tight text-md hover:text-yellow-400">
                          Ver Personagens
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
