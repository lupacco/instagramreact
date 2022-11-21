import React from "react";

import meowed from "../assets/img/meowed.svg";
import gatoTelefone from "../assets/img/gato-telefone.svg";
import barked from "../assets/img/barked.svg";
import dog from "../assets/img/dog.svg";
import respondeai from "../assets/img/respondeai.svg";
import adorableAnimals from "../assets/img/adorable_animals.svg";

let posts = [
  {
    img: meowed,
    user: "meowed",
    content: gatoTelefone,
    liked: respondeai,
    likedName: "respondeai",
    likes: 101.523
  },
  {
    img: barked,
    user: "barked",
    content: dog,
    liked: adorableAnimals,
    likedName: "adorable_animals",
    likes: 99.159
  }
];



function Post(props){
  function savePost(post){
    console.log("salvou")
    console.log(post)
  }


  const [likesAmount, setLikesAmount] = React.useState(props.likes)
  
  function likePost(heartIcon){
    heartIcon.name = 'heart';
    heartIcon.style.color = 'red';
  }
  function dislikePost(heartIcon){
    heartIcon.name = 'heart-outline';
    heartIcon.style.color = null;
  }
  function likeDislike(event){
    const postHeart = event.currentTarget.offsetParent.firstChild;

    let heartIconHTML;
    let postIsLiked = false;
    //In case post is like by double click
    if(event.currentTarget.classList.contains('conteudo')){
      heartIconHTML = event.currentTarget.offsetParent.childNodes[3].firstChild.firstChild.firstChild
      (heartIconHTML.name === 'heart') ? (postIsLiked = true) : (postIsLiked = false)
      likePost(heartIconHTML)
    }else{
      //In case like is called from like button
      heartIconHTML = event.currentTarget;
      !(heartIconHTML.name === 'heart') ? likePost(heartIconHTML) : dislikePost(heartIconHTML)
    }

    //Activate like animation only if the pic is not being disliked
    if(heartIconHTML.name === 'heart'){
      console.log(typeof(likesAmount))
      const incrementedNum = String(Number(likesAmount.replaceAll(".",""))+1);
      const numSize = likesAmount.replaceAll(".",",").length

      if(!postIsLiked){
        setLikesAmount(incrementedNum.slice(0,(Math.floor(numSize/2))) + '.' +incrementedNum.slice(-3))
      }
      postHeart.style.animation = 'postHeartAnimation 0.5s';
      setTimeout(() => {
        postHeart.style.animation = null;
      }, 500)
    } else{
        const decrementedNum = String(Number(likesAmount.replaceAll('.', ""))-1)
        const numSize = likesAmount.replaceAll(".","".length)

        setLikesAmount(decrementedNum.slice(0,(Math.floor(numSize/2))) + '.' +decrementedNum.slice(-3))
    }
  }
  
  return (
    <div class="post">
            <div class="topo">
              <div class="usuario">
                <img alt="" src={props.img} />
                {props.user}
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div class="conteudo">
            <ion-icon class="like" name="heart"></ion-icon>
              <img alt="" data-test="post-image" src={props.content} onDoubleClick={likeDislike}/>
            </div>

            <div class="fundo">
              <div class="acoes">
                <div>
                  <ion-icon data-test="like-post" name="heart-outline" onClick={likeDislike}></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name="bookmark-outline" data-test="save-post" onClick={savePost}></ion-icon>
                </div>
              </div>

              <div class="curtidas">
                <img alt="" src={props.liked} />
                <div class="texto">
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
    <div class="posts">
      {posts.map((post) => {
        return (
          <Post key={post.nome} img={post.img} user={post.user} content={post.content} liked={post.liked} likedName={post.likedName} likes={post.likes} />
      );
      })}
    </div>
  )
}