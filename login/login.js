const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const login = document.getElementById("page-login");
const loginleft = document.getElementById("login-side-left");
const loginright = document.getElementById("login-side-right");
const overlayleft = document.getElementById("overlay-left");
const overlayright = document.getElementById("overlay-right");

signInButton.addEventListener("click", () => {
  loginright.classList.remove("hidden");
  overlayleft.classList.remove("hidden");
  loginleft.classList.add("hidden");
  overlayright.classList.add("hidden");
});
signUpButton.addEventListener("click", () => {
  loginleft.classList.remove("hidden");
  overlayright.classList.remove("hidden");
  loginright.classList.add("hidden");
  overlayleft.classList.add("hidden");
});
