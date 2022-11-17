import meowed from "../assets/img/meowed.svg"
import gatoTelefone from "../assets/img/gato-telefone.svg" 
import barked from "../assets/img/barked.svg"
import dog from "../assets/img/dog.svg"
import respondeai from "../assets/img/respondeai.svg"
import adorableAnimals from "../assets/img/adorable_animals.svg" 

export default function Posts(){
    return(
        <div class="posts">
          <div class="post">
            <div class="topo">
              <div class="usuario">
                <img src={meowed} />
                meowed
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div class="conteudo">
              <img src={gatoTelefone}/>
            </div>

            <div class="fundo">
              <div class="acoes">
                <div>
                  <ion-icon name="heart-outline"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>
              </div>

              <div class="curtidas">
                <img src={respondeai} />
                <div class="texto">
                  Curtido por <strong>respondeai</strong> e{" "}
                  <strong>outras 101.523 pessoas</strong>
                </div>
              </div>
            </div>
          </div>

          <div class="post">
            <div class="topo">
              <div class="usuario">
                <img src={barked} />
                barked
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div class="conteudo">
              <img src={dog} />
            </div>

            <div class="fundo">
              <div class="acoes">
                <div>
                  <ion-icon name="heart-outline"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>
              </div>

              <div class="curtidas">
                <img src={adorableAnimals}/>
                <div class="texto">
                  Curtido por <strong>adorable_animals</strong> e{" "}
                  <strong>outras 99.159 pessoas</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}