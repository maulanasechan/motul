function togglePassword(input, icon) {
  var passwordInput = document.querySelector(`#${input}`);
  var passwordIcon = document.querySelector(`#${icon}`);

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    passwordIcon.src = "../Assets/icon/password_not_view_white.png"; // Replace with the path to your eye-off icon
    passwordIcon.alt = "Hide Password";
  } else {
    passwordInput.type = "password";
    passwordIcon.src = "../Assets/icon/password_view_white.png"; // Replace with the path to your eye icon
    passwordIcon.alt = "Show Password";
  }
}
