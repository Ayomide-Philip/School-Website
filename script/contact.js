var btn = document.getElementById("submit");

btn.addEventListener("click", (event) => {
  var inputedName = document.getElementById("name").value;
  var inputedMessage = document.getElementById("message").value;

  if (inputedName.length === 0) {
    event.preventDefault();
    document.getElementById("name-error").innerText =
      "Enter your name into this field";
  } else {
    console.log(inputedName);
    if (inputedName) {
        
    } else {
        
    }
  }
  event.preventDefault();
});
