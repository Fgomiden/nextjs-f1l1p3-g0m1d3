import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import Nav from "../components/nav";
import Cartao from "../components/cartao";

export default function IndexPage() {
  const [filmes, setFilmes] = useState([]);

  const getMovies = async () => {
    try {
      const response = await axios.get(
        `https://swapi.dev/api/films/?format=json`
      );
      setFilmes(response.data);
      //console.log(JSON.stringify(response.data));
    } catch (error) {
      // handle error
      console.log(error.message);
    }
  };
  // console.log(filmes);
  useEffect(() => {
    getMovies();
  }, []);
  const Movies = [
    {
      id: 1,
      title: "A New Hope",
      episode_id: 4,
      director: "George Lucas",
      producer: "Gary Kurtz, Rick McCallum",
      release_date: "1977-05-25",
      image: "https://images-na.ssl-images-amazon.com/images/I/81aA7hEEykL.jpg",
    },
    {
      id: 2,
      title: "The Empire Strikes Back",
      episode_id: 5,
      director: "Irvin Kershner",
      producer: "Gary Kurtz, Rick McCallum",
      release_date: "1977-05-25",
      image: "https://images-na.ssl-images-amazon.com/images/I/81aA7hEEykL.jpg",
    },
    {
      id: 3,
      title: "Return of the Jedi",
      episode_id: 6,
      director: "Richard Marquand",
      producer: "Gary Kurtz, Rick McCallum",
      release_date: "1977-05-25",
      image: "https://images-na.ssl-images-amazon.com/images/I/81aA7hEEykL.jpg",
    },
    {
      id: 4,
      title: "Return of the Jedi",
      episode_id: 6,
      director: "Richard Marquand",
      producer: "Gary Kurtz, Rick McCallum",
      release_date: "1977-05-25",
      image: "https://images-na.ssl-images-amazon.com/images/I/81aA7hEEykL.jpg",
    },
    {
      id: 5,
      title: "Return of the Jedi",
      episode_id: 6,
      director: "Richard Marquand",
      producer: "Gary Kurtz, Rick McCallum",
      release_date: "1977-05-25",
      image: "https://images-na.ssl-images-amazon.com/images/I/81aA7hEEykL.jpg",
    },
    {
      id: 6,
      title: "Return of the Jedi",
      episode_id: 6,
      director: "Richard Marquand",
      producer: "Gary Kurtz, Rick McCallum",
      release_date: "1977-05-25",
      image: "https://images-na.ssl-images-amazon.com/images/I/81aA7hEEykL.jpg",
    },
  ];
  return (
    <div className="bg-black flex flex-col items-center justify-center">
      {Movies.map((item) => (
        <div
          className="w-full h-40"
          key={item.id}
          //styles={{ backgroundImage: `url(/sw4.jpg)` }}
        >
          <div
            className="flex flex-1 w-full h-full"
            styles={{ backgroundColor: "rgba(0,0,0,0.6)" }}
          >
            <div className="flex flex-1">
              <Image
                src="/sw4.jpg"
                alt="Picture of the author"
                width={300}
                height={300}
                layout="responsive"
              />
            </div>
            <div className="flex flex-1">
              <div className="px-4 py-2">
                <div className="text-2xl text-white font-bold">
                  Star Wars {item.episode_id}: {item.title}
                </div>
                <div className="text-sm text-white">
                  Diretor: {item.director}
                </div>
                <div className="text-sm text-white">
                  Produtor: {item.producer}
                </div>
                <div className="text-sm text-white">
                  Lançamento: {item.release_date}
                </div>
                <div className="mb-2">
                  <a
                    href="/Personagens"
                    className="font-bold leading-tight text-sm text-gray-100 hover:text-gray-100"
                  >
                    Ver Personagens
                  </a>
                </div>
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
/> */
}
