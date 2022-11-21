import React from "react"
import Sugestoes from "./Sugestoes"
import catanacomics from "../assets/img/catanacomics.svg"

export default function SideBar(props){
    const [userName, setUserName] = React.useState(props.userName)
    const [img, setImg] = React.useState(props.userImg)

    return (
        <div class="sidebar">
        <div data-test="user" class="usuario">
          <img alt="" data-test="profile-image" src={img} onClick={() => {
            let newImg = prompt("Nova url para imagem de perfil do usuário!")
            if(!newImg){
              alert('Insira uma url')
            }else{
              setImg(newImg)
            }
          }}/>
          <div class="texto">
            <strong>{props.userNick}</strong>
            <span data-test="name">
              {userName}
              <ion-icon onClick={() => {
                setUserName(prompt("Novo nome de usuário!"))
              }} data-test="edit-name" name="pencil"></ion-icon>
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