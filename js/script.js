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
