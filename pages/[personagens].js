import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";
import Nav from "../components/nav";
import Cartao from "../components/cartao";

export default function Personagens() {
  const [personagens, setPersonagens] = useState([]);
  const [currentPeople, setCurrentPeople] = useState([]);
  const router = useRouter();
  const peopleId = router.query.peopleId;
  //console.log("peopelId:", peopleId);

  const getPersonagens = async () => {
    {
      peopleId.map(async (item) => {
        const response = await axios
          .get(`${item}`)
          //.get(`https://swapi.dev/api/people/${peopleId}?format=json`)
          .catch((err) => console.log("Erro:", err));
        setPersonagens(response.data);
      });
    }
  };

  // const getCurrentPeople = async () => {
  //   await setCurrentPeople(personagens.push(response.data));
  // };

  useEffect(() => {
    getPersonagens();
    //getCurrentPeople();
  }, []);

  //console.log("personagens:", personagens);
  console.log("current:", currentPeople);
  return (
    <div>
      {/* <Nav /> */}
      {personagens.map((item, id) => (
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
              <div className="text-xl text-white font-bold">{item.name}</div>
              <div className="text-sm text-white">Altura: {item.height}</div>
              <div className="text-sm text-white">Massa: {item.mass}</div>
              <div className="text-sm text-white">
                Cor do Cabelo: {item.hair_color}
              </div>
              <div className="text-sm text-white">
                Cor da Pele: {item.skin_color}
              </div>
              <div className="text-sm text-white">
                Cor dos Olhos: {item.eye_color}
              </div>
              <div className="text-sm text-white">
                Nascimento: {item.birth_year}
              </div>
              <div className="text-sm text-white">Genero: {item.gender}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
