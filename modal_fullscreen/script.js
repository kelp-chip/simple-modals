var popupBtn = document.getElementById("popup-btn")
var modal = document.getElementById("modal")
var close = document.getElementById("close-btn")


popupBtn.addEventListener('click', () => popup())
close.addEventListener('click', () => closePopup())


var popup = function () {
  modal.style.display = "block"
}

var closePopup = function () {
  modal.style.display = "none"
}