import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";
import Header from "../components/Header";
//import Cartao from "../components/CartaoFilme";

export default function Personagens() {
  const [personagens, setPersonagens] = useState([]);
  const [currentPeople, setCurrentPeople] = useState([]);
  const router = useRouter();
  const peopleId = router.query.peopleId;

  const getPersonagens = async () => {
    {
      peopleId.map(async (item) => {
        const response = await axios
          .get(`${item}`)
          .catch((err) => console.log("Erro:", err));
        await setPersonagens(response.data);
      });
    }
  };

  const getCurrentPeople = async () => {
    //coloca os objetos personagens dentro do array
    await currentPeople.push(personagens);
  };

  useEffect(() => {
    getPersonagens();
  }, []);

  useEffect(() => {
    getCurrentPeople();
  }, [personagens]); //a funcao getCurrentPeople vai ser chamada sempre qnd tiver items no array personagens

  //console.log("current:", currentPeople);
  //console.log("personagens:", personagens);
  //slice(1) para tirar a primeira posição que tava um array vazio
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-black">
      <Header titulo="Personagens" />
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {currentPeople.slice(1).map((item, id) => (
          <div style={{ width: 500 }} className="flex m-5" key={id}>
            <div className="flex flex-1 items-center justify-center">
              <Image
                src="/sw4.jpg"
                alt="Picture of the author"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
            <div className="flex flex-1">
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
    </div>
  );
}
