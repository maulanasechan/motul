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
  var inputFile = document.querySelector(`.file-input-label`);
  var backButton = document.querySelector(`.backButton`);
  var hasEdit = avatarContainer.classList.contains("deactive");
  if (hasEdit) {
    avatarContainer.classList.remove("deactive");
    editContainer.classList.add("deactive");
    inputFile.classList.add("deactive");
    backButton.setAttribute(
      "onclick",
      "window.location.href='../Homepage/index.html'"
    );
  } else {
    avatarContainer.classList.add("deactive");
    editContainer.classList.remove("deactive");
    inputFile.classList.remove("deactive");
    backButton.setAttribute("onclick", "toggleEdit()");
  }
}

// Get the file input element and icon element
const fileInput = document.getElementById("fileInput");
const icon = document.querySelector(".file-input-icon");

// Add click event listener to the icon
icon.addEventListener("click", () => {
  // Trigger the click event on the file input
  fileInput.click();
});

// Add change event listener to the file input to handle selected file
fileInput.addEventListener("change", (event) => {
  const selectedFile = event.target.files[0];
  // Do something with the selected file, such as displaying its name or processing it
  console.log("Selected file:", selectedFile.name);
});
