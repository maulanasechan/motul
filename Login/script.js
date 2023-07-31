function togglePassword(name) {
  var passwordView = document.querySelector(".passwordView");
  var passwordNotView = document.querySelector(".passwordNotView");
  var inputType = document.querySelector("#passwordView");
  if (name === "passwordView") {
    passwordView.classList.remove("active");
    passwordNotView.classList.add("active");
    inputType.type = "text";
  } else {
    passwordNotView.classList.remove("active");
    passwordView.classList.add("active");
    inputType.type = "password";
  }
}
