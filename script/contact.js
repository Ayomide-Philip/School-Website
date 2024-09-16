var btn = document.getElementById("submit");

btn.addEventListener("click", (event) => {
  console.log(event);
  event.preventDefault();
});
