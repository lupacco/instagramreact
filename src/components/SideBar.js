import Sugestoes from "./Sugestoes"
import catanacomics from "../assets/img/catanacomics.svg"

export default function SideBar(props){
    return (
        <div class="sidebar">
        <div data-test="user" class="usuario">
          <img data-test="profile-image" src={props.userImg} />
          <div class="texto">
            <strong>{props.userNick}</strong>
            <span data-test="name">
              {props.userName}
              <ion-icon data-test="edit-name" name="pencil"></ion-icon>
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