import Sugestoes from "./Sugestoes"
import catanacomics from "../assets/img/catanacomics.svg"

export default function SideBar(){
    return (
        <div class="sidebar">
        <div class="usuario">
          <img src={catanacomics} />
          <div class="texto">
            <strong>catanacomics</strong>
            <span>
              Catana
              <ion-icon name="pencil"></ion-icon>
            </span>
          </div>
        </div>

        <Sugestoes/>

        <div class="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
          Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>

        <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
      </div>
        
    )
}