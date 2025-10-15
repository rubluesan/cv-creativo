// Elements
const loading = document.getElementById("loading");
const lock = document.getElementById("lockScreen");
const home = document.getElementById("homeScreen");
const appScreens = document.querySelectorAll(".app-screen");

// Fake loading then show lock
setTimeout(() => {
  loading.style.display = "none";
  lock.style.zIndex = 20; // visible
}, 1400);

// Open app with slide animation
function openApp(id) {
  home.style.display = "none";
  closeAllScreens();
  const el = document.getElementById("app-" + id);
  el.classList.remove("hide");
  el.classList.add("show");
  el.style.display = "flex";
}

function closeAllScreens() {
  appScreens.forEach((s) => {
    if (s.classList.contains("show")) {
      s.classList.remove("show");
      s.classList.add("hide");
      setTimeout(() => {
        s.style.display = "none";
        s.classList.remove("hide");
      }, 260);
    } else {
      s.style.display = "none";
    }
  });
}

function goHome() {
  closeAllScreens();
  setTimeout(() => {
    home.style.display = "grid";
  }, 280);
}

// Accessibility: open first app with keyboard numbers 1-4
// window.addEventListener("keydown", (e) => {
//   if (e.key === "1") openApp("about");
//   if (e.key === "2") openApp("skills");
//   if (e.key === "3") openApp("projects");
//   if (e.key === "4") openApp("contact");
//   if (e.key === "Escape") goHome();
// });
