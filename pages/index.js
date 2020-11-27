import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import Nav from "../components/nav";
import Cartao from "../components/cartao";
import Link from "next/link";

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
  //console.log("Filmes:", filmes[1].characters);

  return (
    <div className=" flex flex-col  items-center justify-center">
      {filmes.map((item, id) => (
        <div
          style={{ width: 500 }}
          className="flex m-5"
          key={id}
          //styles={{ backgroundImage: `url(/sw4.jpg)` }}
        >
          <div className="flex flex-1 bg-yellow-200 items-center justify-center">
            <Image
              src="/sw4.jpg"
              alt="Picture of the author"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <div className="flex flex-1 bg-yellow-700">
            <div className="px-4 py-2">
              <div className="text-xl text-white font-bold">
                Star Wars {item.episode_id}: {item.title}
              </div>
              <div className="text-sm text-white">Diretor: {item.director}</div>
              <div className="text-sm text-white">
                Produtor: {item.producer}
              </div>
              <div className="text-sm text-white">
                Lançamento: {item.release_date}
              </div>
              <div className="mb-2">
                <Link
                  href={{
                    pathname: `/[personagens]`,
                    query: {
                      personagens: `${id}`,
                      peopleId: filmes[id].characters,
                    },
                  }}
                >
                  <a className="font-bold leading-tight text-sm text-gray-100 hover:text-gray-100">
                    Ver Personagens
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

{
  /* <Cartao 
  titulo={item.title} 
  imagem={item.image}
/> 

${encodeURIComponent(item.id)}
as={"/personagens/" + item.title}
*/
}
