let carousel = document.querySelector("#carousel");
let items = carousel.children;
let index = 0;
setInterval(() => {
  items[index].className = "";
  index++;
  if (index === 4) { index = 0; }
  items[index].className = "active";
}, 10000);