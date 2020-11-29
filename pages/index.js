import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import Header from "../components/Header";
import { imgFilmes } from "../images/Imagens";
import moment from "moment";

export default function IndexPage() {
  //filmes: variavel onde fica armazenado o array com os objetos que vem da api/films
  //setFilmes: coloca a resposta do axios get dentro da variavel filmes
  const [filmes, setFilmes] = useState([]);

  //funcao que faz a requisicao get a api/films e poe o resultado na variavel filmes
  const getMovies = async () => {
    const response = await axios
      .get(`https://swapi.dev/api/films/`)
      .catch((err) => console.log("Erro:", err));
    setFilmes(response.data.results); //resposta da api sendo armazenada na variavel filmes 
  };

  //useEffect executa a funcao getMovies
  useEffect(() => {
    getMovies();
  },[]); //o segundo parametro [] indica ao useEffect ser executado apenas uma vez
  //sem esse parametro o array seria chamado varias vezes
  console.log("Filmes:", filmes);
  
  
  //grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 garante a responsividade para diferentes tamanhos de tela
  //moment(item.release_date).format("DD/MM/YYYY") converte a data que estava no formato ano/mes/dia para dia/mes/ano
  return (
    <div className="flex flex-1 flex-col justify-center items-center bg-black">
      <Header titulo="Filmes" />
      <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {filmes.map((item, id) => { //exibe os itens que estao no array filmes
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
                      Lançamento: {moment(item.release_date).format("DD/MM/YYYY")}
                    </div>
                    <div className="mb-2">
                      <Link
                        as={"/personagens/" + item.title} //apelido na url ficar com o nome do filme
                        href={{
                          pathname: `/personagens`, //encaminha para a tela personagens
                          query: {
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
