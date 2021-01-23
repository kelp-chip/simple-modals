var popupBtn = document.getElementById("popup-btn")
var modal = document.getElementById("modal")
var close = document.getElementById("close-btn")
var overlay = document.getElementById("overlay")
var testBtn = document.getElementById("test")

testBtn.addEventListener('click', function () {
  alert('WOW!')
})

popupBtn.addEventListener('click', () => popup())
close.addEventListener('click', () => closePopup())
overlay.addEventListener('click', ()=> closePopup())


var popup = function () {
  modal.style.display = "block"
  overlay.style.display="block"
}


var closePopup = function () {
  modal.style.display = "none"
  overlay.style.display="none"
}