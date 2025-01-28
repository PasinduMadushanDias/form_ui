document.getElementById("cardForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const inputs = document.querySelectorAll(".input-group input");
    inputs.forEach(input => {
      const small = input.nextElementSibling;
      if (!input.value.trim()) {
        small.textContent = `${input.placeholder} is required.`;
        small.style.visibility = "visible";
      } else {
        small.style.visibility = "hidden";
      }
    });
  });
  