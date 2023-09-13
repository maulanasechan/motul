// Get the calendarDates and monthYear elements
const calendarDates = document.getElementById("calendarDates");
const monthYear = document.getElementById("monthYear");

// Initialize the current year and month
let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();

// Function to generate a calendar for a given month and year
function generateCalendar(year, month) {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  // Create an array of day names
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Set the month and year in the header
  monthYear.textContent = `${new Date(year, month, 1).toLocaleString(
    "default",
    { month: "long" }
  )} ${year}`;

  // Clear the previous calendar dates
  calendarDates.innerHTML = "";

  // Create day name elements
  for (let day of dayNames) {
    const dayElement = document.createElement("div");
    dayElement.classList.add("day");
    dayElement.textContent = day;
    calendarDates.appendChild(dayElement);
  }

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
function showPreviousMonth() {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  generateCalendar(currentYear, currentMonth);
}

// Function to show the next month
function showNextMonth() {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  generateCalendar(currentYear, currentMonth);
}

// Get the "Previous" and "Next" buttons
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

// Add click event listeners to the buttons
prevButton.addEventListener("click", showPreviousMonth);
nextButton.addEventListener("click", showNextMonth);

// Generate the calendar for the initial month and year
generateCalendar(currentYear, currentMonth);
