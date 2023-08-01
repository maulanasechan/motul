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
  } else if (dashboardName === "Field") {
    chartField();
  } else chartAccount();
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
  } else if (dashboardName === "Market") {
    chartMarket();
  } else chartProduction();
}

google.charts.setOnLoadCallback(function () {
  chartTime();
  chartSalesman();
});

function chartTime() {
  const data = google.visualization.arrayToDataTable([
    ["Contry", "Mhl"],
    ["Italy", 54.8],
    ["France", 48.6],
    ["Spain", 44.4],
    ["USA", 23.9],
    ["Argentina", 14.5],
  ]);

  const options = {
    title: "World Wide Wine Production",
    is3D: true,
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("chartTime")
  );
  chart.draw(data, options);
}

function chartField() {
  // Set Data
  const data = google.visualization.arrayToDataTable([
    ["Price", "Size"],
    [50, 7],
    [60, 8],
    [70, 8],
    [80, 9],
    [90, 9],
    [100, 9],
    [110, 10],
    [120, 11],
    [130, 14],
    [140, 14],
    [150, 15],
  ]);
  // Set Options
  const options = {
    title: "House Prices vs. Size",
    hAxis: { title: "Square Meters" },
    vAxis: { title: "Price in Millions" },
    legend: "none",
  };
  // Draw
  const chart = new google.visualization.LineChart(
    document.getElementById("chartField")
  );
  chart.draw(data, options);
}

function chartAccount() {
  const data = google.visualization.arrayToDataTable([
    ["Contry", "Mhl"],
    ["Italy", 55],
    ["France", 49],
    ["Spain", 44],
    ["USA", 24],
    ["Argentina", 15],
  ]);

  const options = {
    title: "World Wide Wine Production",
  };

  const chart = new google.visualization.BarChart(
    document.getElementById("chartAccount")
  );
  chart.draw(data, options);
}

function chartMarket() {
  var data = google.visualization.arrayToDataTable([
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ]);

  var options = {
    title: "My Daily Activities",
    pieHole: 0.4,
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("chartMarket")
  );
  chart.draw(data, options);
}

function chartSalesman() {
  // Set Data
  const data = google.visualization.arrayToDataTable([
    ["Price", "Size"],
    [50, 7],
    [60, 8],
    [70, 8],
    [80, 9],
    [90, 9],
    [100, 9],
    [110, 10],
    [120, 11],
    [130, 14],
    [140, 14],
    [150, 15],
  ]);
  // Set Options
  const options = {
    title: "House Prices vs. Size",
    hAxis: { title: "Square Meters" },
    vAxis: { title: "Price in Millions" },
    legend: "none",
  };
  // Draw
  const chart = new google.visualization.ScatterChart(
    document.getElementById("chartSalesman")
  );
  chart.draw(data, options);
}

function chartProduction() {
  // Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
    [
      "Month",
      "Bolivia",
      "Ecuador",
      "Madagascar",
      "Papua New Guinea",
      "Rwanda",
      "Average",
    ],
    ["2004/05", 165, 938, 522, 998, 450, 614.6],
    ["2005/06", 135, 1120, 599, 1268, 288, 682],
    ["2006/07", 157, 1167, 587, 807, 397, 623],
    ["2007/08", 139, 1110, 615, 968, 215, 609.4],
    ["2008/09", 136, 691, 629, 1026, 366, 569.6],
  ]);

  var options = {
    title: "Monthly Coffee Production by Country",
    vAxis: { title: "Cups" },
    hAxis: { title: "Month" },
    seriesType: "bars",
    series: { 5: { type: "line" } },
  };

  var chart = new google.visualization.ComboChart(
    document.getElementById("chartProduction")
  );
  chart.draw(data, options);
}

// window.onload = function () {
//   var chartTime = new CanvasJS.Chart("chartTime", {
//     animationEnabled: true,
//     backgroundColor: "transparent",
//     data: [
//       {
//         type: "pie",
//         startAngle: 25,
//         toolTipContent: "<b>{label}</b>: {y}%",
//         indexLabelFontColor: "white",
//         indexLabelLineColor: "white",
//         dataPoints: [
//           { y: 51.08, label: "Chrome" },
//           { y: 27.34, label: "Internet Explorer" },
//           { y: 10.62, label: "Firefox" },
//           { y: 5.02, label: "Microsoft Edge" },
//           { y: 4.07, label: "Safari" },
//           { y: 1.22, label: "Opera" },
//           { y: 0.44, label: "Others" },
//         ],
//       },
//     ],
//   });

//   var chartField = new CanvasJS.Chart("chartField", {
//     animationEnabled: true,
//     exportEnabled: true,
//     theme: "light1", // "light1", "light2", "dark1", "dark2"
//     title: {
//       text: "Simple Column Chart with Index Labels",
//     },
//     axisY: {
//       includeZero: true,
//     },
//     data: [
//       {
//         type: "column", //change type to bar, line, area, pie, etc
//         //indexLabel: "{y}", //Shows y value on all Data Points
//         indexLabelFontColor: "#5A5757",
//         indexLabelFontSize: 16,
//         indexLabelPlacement: "outside",
//         dataPoints: [
//           { x: 10, y: 71 },
//           { x: 20, y: 55 },
//           { x: 30, y: 50 },
//           { x: 40, y: 65 },
//           { x: 50, y: 92, indexLabel: "\u2605 Highest" },
//           { x: 60, y: 68 },
//           { x: 70, y: 38 },
//           { x: 80, y: 71 },
//           { x: 90, y: 54 },
//           { x: 100, y: 60 },
//           { x: 110, y: 36 },
//           { x: 120, y: 49 },
//           { x: 130, y: 21, indexLabel: "\u2691 Lowest" },
//         ],
//       },
//     ],
//   });

//   chartTime.render();

//   function toggleChartTop(chartToShow) {
//     if (chartToShow === "chartTime") {
//       document.getElementById("chartTime").classList.add("active");
//       document.getElementById("Time").classList.add("underline_black");
//       document.getElementById("chartField").classList.remove("active");
//       document.getElementById("Field").classList.remove("underline_black");
//       chartTime.render();
//     } else if (chartToShow === "chartField") {
//       document.getElementById("chartTime").classList.remove("active");
//       document.getElementById("Time").classList.remove("underline_black");
//       document.getElementById("chartField").classList.add("active");
//       document.getElementById("Field").classList.add("underline_black");
//       chartField.render();
//     }
//   }

//   // Add event listeners to buttons to toggle charts
//   document.getElementById("Time").addEventListener("click", function () {
//     toggleChartTop("chartTime");
//   });

//   document.getElementById("Field").addEventListener("click", function () {
//     toggleChartTop("chartField");
//   });
// };
