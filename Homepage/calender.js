// JavaScript for Calendar 1
const calendarDates1 = document.getElementById("calendarDates1");
const monthYear1 = document.getElementById("monthYear1");
let currentYear1 = new Date().getFullYear();
let currentMonth1 = new Date().getMonth();

// JavaScript for Calendar 2
const calendarDates2 = document.getElementById("calendarDates2");
const monthYear2 = document.getElementById("monthYear2");
let currentYear2 = new Date().getFullYear();
let currentMonth2 = new Date().getMonth();

// Function to generate a calendar for a given month and year
function generateCalendar(year, month, calendarDates, monthYear) {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  // Set the month and year in the header
  monthYear.textContent = `${new Date(year, month, 1).toLocaleString(
    "default",
    { month: "long" }
  )} ${year}`;

  // Clear the previous calendar dates
  calendarDates.innerHTML = "";

  // Add empty cells for days before the 1st of the month
  for (let i = 0; i < firstDay; i++) {
    const emptyCell = document.createElement("div");
    emptyCell.classList.add("empty");
    calendarDates.appendChild(emptyCell);
  }

  // Create date elements for the month
  for (let i = 1; i <= daysInMonth; i++) {
    const dateElement = document.createElement("div");
    dateElement.classList.add("date");
    dateElement.textContent = i;
    calendarDates.appendChild(dateElement);
  }
}

// Function to show the previous month
function showPreviousMonth(year, month, calendarDates, monthYear) {
  month--;
  if (month < 0) {
    month = 11;
    year--;
  }
  generateCalendar(year, month, calendarDates, monthYear);
}

// Function to show the next month
function showNextMonth(year, month, calendarDates, monthYear) {
  month++;
  if (month > 11) {
    month = 0;
    year++;
  }
  generateCalendar(year, month, calendarDates, monthYear);
}

// Add event listeners to the buttons for Calendar 1
const prevButton1 = document.getElementById("prevButton1");
const nextButton1 = document.getElementById("nextButton1");

prevButton1.addEventListener("click", () =>
  showPreviousMonth(currentYear1, currentMonth1, calendarDates1, monthYear1)
);
nextButton1.addEventListener("click", () =>
  showNextMonth(currentYear1, currentMonth1, calendarDates1, monthYear1)
);

// Generate the initial calendar for Calendar 1
generateCalendar(currentYear1, currentMonth1, calendarDates1, monthYear1);

// Add event listeners to the buttons for Calendar 2
const prevButton2 = document.getElementById("prevButton2");
const nextButton2 = document.getElementById("nextButton2");

prevButton2.addEventListener("click", () =>
  showPreviousMonth(currentYear2, currentMonth2, calendarDates2, monthYear2)
);
nextButton2.addEventListener("click", () =>
  showNextMonth(currentYear2, currentMonth2, calendarDates2, monthYear2)
);

// Generate the initial calendar for Calendar 2
generateCalendar(currentYear2, currentMonth2, calendarDates2, monthYear2);
