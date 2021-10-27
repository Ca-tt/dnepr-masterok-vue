let modal = document.getElementById("mymodal-wrap");

let popupTogle = document.getElementById("mybtn");

let popupClose = document.querySelector(".close-modal");

popupTogle.onclick = function(){
  modal.style.display = "block";
};
popupClose.onclick = function(){
  modal.style.display = "none";
};