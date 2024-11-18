let modalWindow = document.querySelector('.modal-container');
let closeButton = modalWindow.querySelector('.modal-close-button');
let openmWidow =document.querySelector('.menu-button');
function openModule(){
  modalWindow.style.display = 'block';
};
function closeModal (){
  modalWindow.style.display = 'none';
}

closeButton.onclick =function(){
closeModal();
};

openmWidow.onclick=function(){
  openModule();
};

document.addEventListener('keydown',function(evt){
  if(evt.keyCode===27){
    closeModal();

  };

});
