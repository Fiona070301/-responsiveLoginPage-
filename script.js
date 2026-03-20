const submitButton = document.getElementById("submitButton");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const errorMessage = document.getElementById("errorMessage");

submitButton.disabled = true;

function validateForm() {
  const first = firstName.value.trim();
  const last = lastName.value.trim();

  console.log(first);
  console.log(last);

  submitButton.disabled = first === "" || last === "";

  if (first === "" || last === "") {
    errorMessage.textContent = "Bitte fülle alle Felder aus!";
  } else {
    errorMessage.textContent = "";
  }
}

firstName.addEventListener("input", validateForm);
lastName.addEventListener("input", validateForm);

submitButton.addEventListener("click", () => {
  alert(`Vielen Dank ${firstName.value} ${lastName.value}! Deine Angaben wurden erfolgreich übermittelt.`);
});