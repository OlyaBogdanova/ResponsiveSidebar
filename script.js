window.addEventListener('DOMContentLoaded', ()=>{
  const btn = document.querySelector("#btn");
  console.log(btn);
const sideBar = document.querySelector(".sidebar");
btn.addEventListener("click", () => {
  sideBar.classList.toggle("active");
});

})