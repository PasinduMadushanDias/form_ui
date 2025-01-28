const monthYear = document.getElementById("monthYear");
const daysContainer = document.querySelector(".days");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

const renderCalendar = () => {
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  
  monthYear.textContent = `${monthNames[currentMonth]} ${currentYear}`;
  daysContainer.innerHTML = "";

  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  for (let i = 0; i < firstDay; i++) {
    daysContainer.innerHTML += `<span></span>`;
  }

  for (let i = 1; i <= daysInMonth; i++) {
    daysContainer.innerHTML += `<span>${i}</span>`;
  }
};

prev.addEventListener("click", () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar();
});

next.addEventListener("click", () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendar();
});

renderCalendar();
