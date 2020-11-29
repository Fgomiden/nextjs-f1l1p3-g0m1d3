import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";
import Header from "../components/Header";

export default function Personagens() {
  //permite trazer props da tela dos filmes
  const router = useRouter();

  //linksPersonagens: variavel onde é armazenado os links api de cada personagem.
  //router.query.people é o array de personagens do filme selecionado
  const [linksPersonagens] = useState(router.query.people);
  //console.log("Links personagens:", linksPersonagens);

  //personagens: varaivel onde é armazenado o objeto de cada personagem. Ex: Object{name:"Luke", ...}
  //setPersonagens: coloca a resposta da requisicao get na varaivel personagens
  const [personagens, setPersonagens] = useState([]);

  //listaPersonagens: aramazena todos os objetos dos personagens em um array
  const [listaPersonagens] = useState([]);

  //funcao que faz requisacao de cada api de personagem
  const getPersonagens = async () => {
    {
      linksPersonagens.map(async (item) => {
        //exibe cada link de api/people do filme selecionado
        const response = await axios
          .get(`${item}`) //requisicao get de cada api/people
          .catch((err) => console.log("Erro:", err));
        setPersonagens(response.data); //armazena o object na variavel personagens
      });
    }
  };

  const listarPersonagens = () => {
    //coloca os objetos personagens dentro do array listaPersonagens
    listaPersonagens.push(personagens);
  };

  useEffect(() => {
    getPersonagens();
  }, []); //a funcao getPersonagens vai ser chamada apenas uma vez

  useEffect(() => {
    listarPersonagens();
  }, [personagens]); //a funcao listarPersonagens vai ser chamada sempre quando tiver items no array personagens

  //console.log("personagens:", personagens);
  //console.log("lista personagens:", listaPersonagens);

  //objetos personagens que estao armazenados no listapersonagens sao exibidos com o map.
  //slice(1) para tirar a primeira posição que é um array vazio

  //grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 garante a responsividade para diferentes tamanhos de tela
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <Header titulo="Personagens" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {listaPersonagens.slice(1).map((item, id) => (
          <div className="lg:flex rounded-xl shadow-md m-10" key={id}>
            <div className="flex flex-1 items-center justify-center">
              <Image
                src="/profile.png"
                alt="Perfil personagem"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
            <div className="flex flex-1">
              <div className="px-4 py-2">
                <div className="text-xl text-white font-bold mb-5">
                  {item.name}
                </div>
                <div className="text-md text-white">
                  Altura: {item.height} cm
                </div>
                <div className="text-md text-white">Peso: {item.mass} kg</div>
                <div className="text-md text-white">
                  Cor do Cabelo: {item.hair_color}
                </div>
                <div className="text-md text-white">
                  Cor da Pele: {item.skin_color}
                </div>
                <div className="text-md text-white">
                  Cor dos Olhos: {item.eye_color}
                </div>
                <div className="text-md text-white">
                  Nascimento: {item.birth_year}
                </div>
                <div className="text-md text-white">Gênero: {item.gender}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
