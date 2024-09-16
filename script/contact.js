var btn = document.getElementById("submit");

btn.addEventListener("click", (event) => {
  var inputedName = document.getElementById("name").value;
  var inputedMessage = document.getElementById("message").value;

  if (inputedName.length === 0) {
    console.log("true");
  } else {
    console.log(inputedName);
  }
  event.preventDefault();
});
