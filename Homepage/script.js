// script.js
const carouselTrack = document.querySelector(".carousel-track");
const carouselSlides = Array.from(document.querySelectorAll(".carousel-slide"));

const slideWidth = carouselSlides[0].clientWidth;
let currentIndex = 0;

function moveToSlide(index) {
  carouselTrack.style.transform = `translateX(-${slideWidth * index}px)`;
  currentIndex = index;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % carouselSlides.length;
  moveToSlide(currentIndex);
}

function prevSlide() {
  currentIndex =
    (currentIndex - 1 + carouselSlides.length) % carouselSlides.length;
  moveToSlide(currentIndex);
}

setInterval(nextSlide, 3000); // Auto slide every 3 seconds

function toggleMenu(name) {
  // Toggle 'underline' class for the selected menu name
  var selectedMenuName = document.querySelector(`.menuName${name}`);
  var hasUnderline = selectedMenuName.classList.contains("underline");
  var selectedSubMenu = document.querySelector(`.subMenu${name}`);
  var menuNames = document.querySelectorAll("#menuName");
  var subMenus = document.querySelectorAll("#subMenu");

  // Remove 'underline' class from all menu names
  menuNames.forEach(function (menuName) {
    menuName.classList.remove("underline");
  });

  subMenus.forEach(function (subMenu) {
    subMenu.classList.remove("active");
  });

  if (hasUnderline) {
    selectedMenuName.classList.remove("underline");
    selectedSubMenu.classList.remove("active");
  } else {
    selectedMenuName.classList.add("underline");
    selectedSubMenu.classList.add("active");
  }
}

function toggleSubMenu(link) {
  var menuNames = document.querySelectorAll("#menuName");
  var subMenus = document.querySelectorAll("#subMenu");
  menuNames.forEach(function (menuName) {
    menuName.classList.remove("underline");
  });

  subMenus.forEach(function (subMenu) {
    subMenu.classList.remove("active");
  });

  window.location.href = link;
}

function toggleDashboardTop(name) {
  var dashboardName = document.querySelector(`.dashboard${name}`);
  var dashboards = document.querySelectorAll("#dashboardTop");
  dashboards.forEach(function (dashboard) {
    dashboard.classList.remove("underline_black");
  });

  dashboardName.classList.add("underline_black");
}

function toggleDashboardBottom(name) {
  var dashboardName = document.querySelector(`.dashboard${name}`);
  var dashboards = document.querySelectorAll("#dashboardBottom");
  dashboards.forEach(function (dashboard) {
    dashboard.classList.remove("underline_black");
  });

  dashboardName.classList.add("underline_black");
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
