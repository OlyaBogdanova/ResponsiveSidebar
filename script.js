const btn = document.querySelector("#btn");
const sideBar = document.querySelector(".sidebar");
btn.addEventListener("click", () => {
  sideBar.classList.toggle("active");
});
