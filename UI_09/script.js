const daysGrid = document.querySelector(".days-grid");
const currentMonth = document.getElementById("currentMonth");
const prevMonth = document.getElementById("prevMonth");
const nextMonth = document.getElementById("nextMonth");
const eventModal = document.getElementById("eventModal");
const eventInput = document.getElementById("eventInput");
const addEvent = document.getElementById("addEvent");

let month = new Date().getMonth();
let year = new Date().getFullYear();

function renderCalendar() {
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];

  currentMonth.textContent = `${monthNames[month]} ${year}`;
  daysGrid.innerHTML = "";

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let i = 0; i < firstDay; i++) {
    daysGrid.innerHTML += `<div></div>`;
  }

  for (let i = 1; i <= daysInMonth; i++) {
    daysGrid.innerHTML += `<div data-day="${i}">${i}</div>`;
  }

  document.querySelectorAll(".days-grid div[data-day]").forEach((day) => {
    day.addEventListener("click", () => {
      eventModal.style.display = "block";
    });
  });
}

prevMonth.addEventListener("click", () => {
  month--;
  if (month < 0) {
    month = 11;
    year--;
  }
  renderCalendar();
});

nextMonth.addEventListener("click", () => {
  month++;
  if (month > 11) {
    month = 0;
    year++;
  }
  renderCalendar();
});

addEvent.addEventListener("click", () => {
  alert(`Event added: ${eventInput.value}`);
  eventModal.style.display = "none";
  eventInput.value = "";
});

renderCalendar();
