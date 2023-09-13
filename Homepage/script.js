// script.js
const carouselTrack = document.querySelector(".carousel-track");
const carouselSlides = Array.from(document.querySelectorAll(".carousel-slide"));

// const slideWidth = carouselSlides[0].clientWidth;
// let currentIndex = 0;

// function moveToSlide(index) {
//   carouselTrack.style.transform = `translateX(-${slideWidth * index}px)`;
//   currentIndex = index;
// }

// function nextSlide() {
//   currentIndex = (currentIndex + 1) % carouselSlides.length;
//   moveToSlide(currentIndex);
// }

// function prevSlide() {
//   currentIndex =
//     (currentIndex - 1 + carouselSlides.length) % carouselSlides.length;
//   moveToSlide(currentIndex);
// }

// setInterval(nextSlide, 3000); // Auto slide every 3 seconds

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

google.charts.load("current", { packages: ["corechart"] });

function toggleDashboardTop(dashboardName, chartName) {
  var dashboard = document.querySelector(`#${dashboardName}`);
  var dashboards = document.querySelectorAll(".dashboardTop");
  var charts = document.querySelectorAll(".chartTop");
  var chart = document.querySelector(`#${chartName}`);

  dashboards.forEach(function (d) {
    d.classList.remove("underline_black");
  });

  charts.forEach(function (c) {
    c.classList.remove("active");
  });

  dashboard.classList.add("underline_black");
  chart.classList.add("active");
  if (dashboardName === "Time") {
    chartTime();
  }
}

function toggleDashboardBottom(dashboardName, chartName) {
  var dashboard = document.querySelector(`#${dashboardName}`);
  var dashboards = document.querySelectorAll(".dashboardBottom");
  var charts = document.querySelectorAll(".chartBottom");
  var chart = document.querySelector(`#${chartName}`);

  dashboards.forEach(function (d) {
    d.classList.remove("underline_black");
  });

  charts.forEach(function (c) {
    c.classList.remove("active");
  });

  dashboard.classList.add("underline_black");
  chart.classList.add("active");
  if (dashboardName === "Salesman") {
    chartSalesman();
  } else chartAccount();
}

google.charts.setOnLoadCallback(function () {
  chartTime();
  chartSalesman();
});

function chartTime() {
  const data = google.visualization.arrayToDataTable([
    ["Activity", "Hours"],
    ["Sales Review", 200],
    ["Business Review", 100],
    ["Admin Work", 50],
    ["Join Visit", 120],
    ["Field Tracking", 100],
    ["Account Dev", 10],
  ]);

  const options = {
    title: "Time Spend Activity",
    is3D: true,
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("chartTime")
  );
  chart.draw(data, options);
}

function chartAccount() {
  const data = google.visualization.arrayToDataTable([
    ["Days", "On Progress", "Done"],
    ["01-Sep", 3, 1],
    ["02-Sep", 3, 2],
    ["03-Sep", 5, 2],
    ["04-Sep", 5, 3],
    ["05-Sep", 7, 4],
    ["06-Sep", 7, 5],
    ["07-Sep", 7, 5],
  ]);

  const options = {
    title: "Account Development",
    orientation: "horizontal",
    legend: { position: "bottom" },
  };

  const chart = new google.visualization.BarChart(
    document.getElementById("chartAccount")
  );
  chart.draw(data, options);
}

function chartSalesman() {
  const data = google.visualization.arrayToDataTable([
    ["Salesman", "Score"],
    ["Salesman A", 4],
    ["Salesman B", 3],
    ["Salesman C", 5],
  ]);

  const options = {
    title: "Salesman Rating",
    orientation: "horizontal",
    legend: "none",
  };

  const chart = new google.visualization.BarChart(
    document.getElementById("chartSalesman")
  );
  chart.draw(data, options);
}
