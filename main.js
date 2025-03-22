const itemList = document.querySelectorAll(".list-item");
const button = document.querySelector("#button");

button.addEventListener("click", () => {
  itemList.forEach((item) => {
    item.style.color = "red";
    item.style.fontSize = "40px";
  });
});
