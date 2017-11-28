document.addEventListener("DOMContentLoaded", function(){

  window.addEventListener('keydown', pressedKey);

  let key = document.querySelector(".key");
  let keyCode = document.querySelector(".key-code");
  key.style.display = "none";

  function pressedKey(event) {
    console.log(`${event.key} `, event.keyCode);
    document.querySelector(".welcome").style.display = "none";
    key.style.display = "initial";
    keyCode.textContent = event.keyCode;
    key.textContent = event.key;
  }

});
