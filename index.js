var toggler = document.querySelector(".slider");
var main = document.getElementById("main");
var overview = document.getElementById("overview");

toggler.addEventListener("click", () => {
  main.classList.toggle("dark-mode-top-bg");
  var item = document.getElementsByClassName("item");
  var i
  for (i = 0; i < item.length; i++) {
    item[i].classList.toggle("dark-mode-item");
  }
  var j
  var card = document.getElementsByClassName("card");
  for (j = 0; j < card.length; j++) {
    card[j].classList.toggle("dark-mode-card");
  }
  overview.classList.toggle("dark-mode-card-bg");
})
