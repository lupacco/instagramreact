import React from "react";

import meowed from "../assets/img/meowed.svg";
import gatoTelefone from "../assets/img/gato-telefone.svg";
import barked from "../assets/img/barked.svg";
import dog from "../assets/img/dog.svg";
import respondeai from "../assets/img/respondeai.svg";
import adorableAnimals from "../assets/img/adorable_animals.svg";

let posts = [
  {
    id: 1,
    img: meowed,
    user: "meowed",
    content: gatoTelefone,
    liked: respondeai,
    likedName: "respondeai",
    likes: 101523,
    isLiked: false,
    isSaved: false
  },
  {
    id: 2,
    img: barked,
    user: "barked",
    content: dog,
    liked: adorableAnimals,
    likedName: "adorable_animals",
    likes: 99159,
    isLiked: true,
    isSaved: false
  }
];



function Post(props){
  const [liked, setLiked] = React.useState(props.isLiked)
  const [likesAmount, setLikesAmount] = React.useState(props.likes)
  const [bookMark, setBookMark] = React.useState("bookmark-outline")
  
  function savePost(bookMark){
    !(bookMark === "bookmark") ? setBookMark("bookmark") : setBookMark("bookmark-outline")
  }
  
  function likeDislike(event){
    if(liked === false){
      console.log(event)
      event.currentTarget.name = 'heart'
      event.currentTarget.style.color = 'red'
      setLiked(true)
    } else{
      event.currentTarget.name = 'heart-outline'
      event.currentTarget.style.color = null
      setLiked(false)
    }
    console.log('like')
  }

  function likeByScreen(event){
    console.log(event)
    event.currentTarget.name = 'heart'
    event.currentTarget.style.color = 'red'
    likeAnimation()
    setLiked(true) 
  }
  function likeAnimation(){
    console.log("bucica")
    let heartDoubleClick = document.querySelector('.like')
    heartDoubleClick.classList.add('likeAnimation')
    setTimeout(() => {
      heartDoubleClick.classList.remove('likeAnimation')
    }, 500)
  }
  
  
  return (
    <div className="post">
            <div className="topo">
              <div className="usuario">
                <img alt="" src={props.img} />
                {props.user}
              </div>
              <div className="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div className="conteudo">
            <ion-icon class="like" name="heart"></ion-icon>
              <img alt="" data-test="post-image" src={props.content} onDoubleClick={likeByScreen}/>
            </div>

            <div className="fundo">
              <div className="acoes">
                <div>
                  <ion-icon data-test="like-post" name="heart-outline" onClick={likeDislike}></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name={bookMark} data-test="save-post" onClick={() => {
                    savePost(bookMark)
                  }}></ion-icon>
                </div>
              </div>

              <div className="curtidas">
                <img alt="" src={props.liked} />
                <div className="texto">
                  Curtido por <strong>{props.likedName}</strong> e{" "}
                  <strong data-test="likes-number">outras {props.likes} pessoas</strong>
                </div>
              </div>
            </div>
          </div>
  )
}

export default function Posts() {
  return (  
    <div className="posts">
      {posts.map((post) => {
        return (
          <Post 
          key={post.id} 
          img={post.img} 
          user={post.user} 
          content={post.content} 
          liked={post.liked} 
          likedName={post.likedName} 
          likes={post.likes}
          isLiked={post.isLiked}
          isSaved={post.isSaved} />
      );
      })}
    </div>
  )
}