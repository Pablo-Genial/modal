const openModal = document.querySelector('button.modal-call');

openModal.addEventListener('click', function () {
    document.querySelector('.modal-content').style.display = "block";
});

openModal.addEventListener('click', function(){
    document.querySelector('.overlay').style.display = "block";})



const closeX = document.querySelector('span.close');




closeX.addEventListener('click', function () {
    document.querySelector('.modal-content').style.display = "none";
});

closeX.addEventListener('click', function(){
    document.querySelector('.overlay').style.display = "none";})