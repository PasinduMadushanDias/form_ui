const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    contents.forEach((content) => {
      content.style.display = "none";
    });

    document.getElementById(tab.dataset.tab).style.display = "block";
  });
});
