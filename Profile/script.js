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

function togglePopUp() {
  var modalPopUp = document.querySelector(`.modalPopUp`);
  var overlay = document.querySelector(`.overlay`);
  var hasActive = modalPopUp.classList.contains("active");

  if (hasActive) {
    modalPopUp.classList.remove("active");
    overlay.classList.remove("active");
  } else {
    modalPopUp.classList.add("active");
    overlay.classList.add("active");
  }
}

function toggleEdit() {
  var avatarContainer = document.querySelector(`.avatarContainer`);
  var editContainer = document.querySelector(`.editContainer`);
  var hasEdit = avatarContainer.classList.contains("deactive");
  if (hasEdit) {
    avatarContainer.classList.remove("deactive");
    editContainer.classList.add("deactive");
  } else {
    avatarContainer.classList.add("deactive");
    editContainer.classList.remove("deactive");
  }
}
