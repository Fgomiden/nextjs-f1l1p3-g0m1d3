import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import Header from "../components/Header";
import CartaoFilme from "../components/CartaoFilme";

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
  //console.log("Filmes:", filmes);

  return (
    <div className="flex flex-1 flex-col justify-center items-center bg-black">
      <Header titulo="Filmes" />
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filmes.map((item, id) => (
          <div className="lg:flex bg-white rounded-xl shadow-md m-10" key={id}>
            <div className="lg:flex">
              <div className="flex flex-1 bg-black lg:bg-white justify-center lg:justify-start">
                <Image
                  src="/sw4.jpg"
                  alt="Picture of the author"
                  width={200}
                  height={200}
                  className=" object-cover"
                />
              </div>
              <div className="flex flex-1">
                <div className="p-4 ">
                  <div className="text-xl  font-bold">
                    Star Wars {item.episode_id}: {item.title}
                  </div>
                  <div className="text-sm ">Diretor: {item.director}</div>
                  <div className="text-sm ">Produtor: {item.producer}</div>
                  <div className="text-sm ">
                    Lançamento: {item.release_date}
                  </div>
                  <div className="mb-2">
                    <Link
                      as={"/personagens/" + item.title}
                      href={{
                        pathname: `/[personagens]`,
                        query: {
                          personagens: `${id}`,
                          peopleId: filmes[id].characters,
                        },
                      }}
                    >
                      <a className="font-bold leading-tight text-sm hover:text-yellow-400">
                        Ver Personagens
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
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
/> 

as={"/personagens/" + item.title}
*/
}
