"use strict";
const logincont = document.getElementById("login--container");
const cont = document.getElementById("page--hidden");
const loginbtn = document.getElementById("login-btn");
loginbtn.addEventListener("click", function (e) {
  cont.classList.add("hidden");
  console.log("click");
  logincont.classList.remove("hidden");
});

const gpselement = document.getElementById("placeid");
const gpsbox = document.querySelector(".place-location-box");
gpselement.addEventListener("click", function (e) {
  e.preventDefault;
  console.log(e);
  gpsbox.classList.remove("hidden");
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !gpsbox.classList.contains("hidden")) {
    gpsbox.classList.add("hidden");
  }
});
