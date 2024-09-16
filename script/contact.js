var btn = document.getElementById("submit");

btn.addEventListener("click", (event) => {
  var inputedName = document.getElementById("name").value;
  var inputedMessage = document.getElementById("message").value;

  inputedName = inputedName.trim();

  if (inputedName.length === 0) {
    event.preventDefault();
    document.getElementById("name-error").innerText =
      "Enter your name into this field";
  } else {
    if (inputedName.indexOf(" ") < 0) {
      event.preventDefault();
      document.getElementById("name-error").innerText =
        "You only Inputed your Surname or Lastname";
    }
  }
  event.preventDefault();
});
