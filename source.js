function addEmail() {
  // === validation process for the email address ===
  // pattern to match the email info
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  // get input element from DOM
  var inputElement = document.querySelector("#email-input");

  // get error label from DOM
  var invalidMessageLabel = document.querySelector("#invalid-email-label");

  // get computed styles to have access to global variables defined in css style sheets
  var computedStyles = getComputedStyle(document.querySelector(":root"));

  if (inputElement.value.match(validRegex)) {
    // **** valid email ****
    // the email is valid so hide the main dialog and show the "Successful Operation" dialog
    // set the value of the entered email to the label in the response dialog
    document.querySelector("#email-address-label").innerText =
      inputElement.value;

    // clear the value of input element to be ready for the next input
    inputElement.value = "";

    // clear all the styling corresponding to invalid email status
    clearInvalidEmailStyle();

    // take out from sight the main page
    document.querySelector("#main-page").style.marginLeft = "-100%";

    // get in the response page
    document.querySelector("#response-page").style.marginLeft = "0";
  } else {
    // **** invalid email ****
    console.log("the email is invalid");
    // the email is invalid so add some alert styling to the visual interface
    // and wait for the user to enter a valid email

    // change the style of invalid email message element
    invalidMessageLabel.style.opacity = 1;

    // change the style of input element
    inputElement.style.backgroundColor =
      computedStyles.getPropertyValue("--lightred-color");
    inputElement.style.color = computedStyles.getPropertyValue("--red-color");
    inputElement.style.borderColor =
      computedStyles.getPropertyValue("--red-color");
  }
}

function clearInvalidEmailStyle() {
  console.log("change detected");

  // get input element from DOM
  var inputElement = document.querySelector("#email-input");
  // get error label from DOM
  var invalidMessageLabel = document.querySelector("#invalid-email-label");
  // get computed styles to have access to global variables defined in css style sheets
  var computedStyles = getComputedStyle(document.querySelector(":root"));

  // remove the inline color property value
  inputElement.style.color = null;

  // remove the inline border-color property value
  inputElement.style.borderColor = null;

  // remove the inline background-color property value
  inputElement.style.backgroundColor = null;

  invalidMessageLabel.style.opacity = 0;
}

function resetToInitialStatus() {
  // hide response page
  document.querySelector("#response-page").style.marginLeft = "100%";

  // show main page
  document.querySelector("#main-page").style.marginLeft = "0";
}
