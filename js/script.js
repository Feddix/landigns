const body = document.querySelector("body"),
switchMode = document.querySelector('#switchMode');

// let getMode = localStorage.getItem("mode");
// if (getMode && getMode === "dark") {
//   body.classList.add("dark");
//   switchMode.classList.add("active");
// }

switchMode.addEventListener("click", () => {
  body.classList.switchMode("dark");

  if (!body.classList.contains("dark")) {
    return localStorage.setItem("mode", "light");
  }
  localStorage.setItem("mode", "dark");
});

switchMode.addEventListener("click", () => switchMode.classList.switchMode("active"));
