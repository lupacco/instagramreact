import meowed from "../assets/img/meowed.svg"
import barked from "../assets/img/barked.svg"
import nathanwpylestrangeplanet from "../assets/img/nathanwpylestrangeplanet.svg"
import wawawicomics from "../assets/img/wawawicomics.svg"
import respondeai from "../assets/img/respondeai.svg"
import filomoderna from "../assets/img/filomoderna.svg" 
import img9gag from "../assets/img/9gag.svg";
import memeriagourmet from "../assets/img/memeriagourmet.svg";

export default function Stories(){
  let stories = [
    {
      nome: "9gag",
      img: img9gag
    },
    {
      nome: "meowed",
      img: meowed
    },
    {
      nome: "barked",
      img: barked
    },
    {
      nome: "nathanwpylestrangeplanet",
      img: nathanwpylestrangeplanet
    },
    {
      nome: "wawawicomics",
      img: wawawicomics
    },
    {
      nome: "respondeai",
      img: respondeai
    },
    {
      nome: "filomoderna",
      img: filomoderna
    },
    {
      nome: "memeriagourmet",
      img: memeriagourmet
    },
  ]

    return (
        <div class="stories">
          {stories.map(storie => {
            return (
              <div class="story">
                <div class="imagem">
                  <img src={storie.img} />
                </div>
                <div class="usuario">{storie.nome}</div>
              </div>
            )
          })}

          <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>
    )
}