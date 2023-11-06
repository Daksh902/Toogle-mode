import "./styles.css";
const toggleSwitch = document.getElementById("toggleSwitch");

toggleSwitch.addEventListener("change", function () {
  const body = document.body;
  if (this.checked) {
    body.style.backgroundColor = "black";
    body.style.color =
      "white"; /* Change text color to white when the switch is on */
  } else {
    body.style.backgroundColor = "white";
    body.style.color =
      "black"; /* Restore default text color when the switch is off */
  }
});
