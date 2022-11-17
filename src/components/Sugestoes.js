import Usuario from "./Usuario";
import img9gag from "../assets/img/9gag.svg";
import chibirdart from "../assets/img/chibirdart.svg";
import razoesparaacreditar from "../assets/img/razoesparaacreditar.svg";
import adorable_animals from "../assets/img/adorable_animals.svg";
import smallcutecats from "../assets/img/smallcutecats.svg";

export default function Sugestoes() {
  const users = [
    {
      nome: "9gag",
      img: img9gag,
    },
    {
      nome: "chibirdart",
      img: chibirdart,
    },
    {
      nome: "razoesparaacreditar",
      img: razoesparaacreditar,
    },
    {
      nome: "adorable_animals",
      img: adorable_animals
    },
    {
      nome: "smallcutecats",
      img: smallcutecats
    },
  ];

  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      {users.map(sugested => {
        return(
        <div class="sugestao">
          <Usuario nome={sugested.nome} img={sugested.img} />

          <div class="seguir">Seguir</div>
        </div>
        )
      })}
    </div>
  );
}
