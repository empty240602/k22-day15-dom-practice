const themeToggleBtn = document.getElementById("theme-toggle");
const passwordInput = document.getElementById("password");
const togglePasswordBtn = document.getElementById("toggle-password");
const eyeIcon = document.getElementById("eye-icon");
const eyeSlashIcon = document.getElementById("eye-slash-icon");

const mainImage = document.getElementById("main-image");
const thumbnails = document.querySelectorAll(".thumbnail");

themeToggleBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});

togglePasswordBtn.addEventListener("click", () => {
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";
  eyeIcon.classList.toggle("hidden");
  eyeSlashIcon.classList.toggle("hidden");
});

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    thumbnails.forEach((thumbnail) => {
      thumbnail.classList.remove("active");
      thumbnail.classList.add("border-transparent");
    });
    thumbnail.classList.add("active");
    thumbnail.classList.remove("border-transparent");
    mainImage.setAttribute("src", thumbnail.getAttribute("src"));
    mainImage.setAttribute("alt", thumbnail.getAttribute("alt"));
  });
});
