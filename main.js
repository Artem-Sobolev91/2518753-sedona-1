let heart=document.querySelector('.menu-link__heart');

let likeNumber=document.querySelector('.notification-badge');
heart.onclick=function (evt) {
  evt.prevetnDefault;
if(heart.classList.contains('added')){
  likeNumber.textContent--;
}
else{
  likeNumber.textContent++;
}
heart.classList.toggle('added')
}
