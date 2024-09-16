var btn = document.getElementById("submit");

btn.addEventListener("click", (event) => {
  var inputedName = document.getElementById("name").value;
  var inputedMessage = document.getElementById("message").value;
  var emailAddress = document.getElementById("")
  inputedName = inputedName.trim();
  inputedMessage = inputedMessage.trim();

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

  if (inputedMessage.length === 0) {
    event.preventDefault();
    document.getElementById("message-error").innerText =
      "Input your message into the field.";
  } else {
    if (inputedMessage.length < 20) {
      event.preventDefault();
      console.log(inputedMessage.length);
      document.getElementById(
        "message-error"
      ).innerText = `You need at least 20 letter word, it remains ${
        20 - inputedMessage.length
      }.`;
    }
  }

  if (condition) {
    
  } else {
    
  }

  event.preventDefault();
});
