const loadingbar = document.querySelector(".loader");
const code = document.querySelector(".card");

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  let scrollHeight = document.documentElement.scrollHeight;
  let scrolled = (scrollTop / (scrollHeight - window.innerHeight)) * 100;

  loadingbar.style.width = `${scrolled}%`;
  if (scrolled < 30) {
    loadingbar.style.background = "red";
  } else if (scrolled < 60) {
    loadingbar.style.background = "orange";
  } else {
    loadingbar.style.background = "green";
  }
});
