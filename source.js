// get input HTMLElement used by the user to enter the email information
const inputElement = document.querySelector("#email-input");

// get HTMLElement that shows the error message indicating the user the email is invalid
const invalidMessageLabel = document.querySelector("#invalid-email-label");

// HTMLElement for response page
const responsePage = document.querySelector("#response-page");

// HTMLElement for main page
const mainPage = document.querySelector("#main-page");

// HTMLElement that will show to the user the email to which the subscription was made
const emailAddressLabel = document.querySelector("#email-address-label");

// get computed styles to have access to global variables defined in css style sheets
const computedStyles = getComputedStyle(document.querySelector(":root"));

// pattern to match the email info for validation purposes
const validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function addEmail() {
  // === validation process for the email address ===

  if (inputElement.value.match(validRegex)) {
    // **** valid email ****
    // the email is valid so hide the main dialog and show the "Successful Operation" dialog
    // set the value of the entered email to the label in the response dialog
    emailAddressLabel.innerText = inputElement.value;

    // clear the value of input element to be ready for the next input
    inputElement.value = "";

    // clear all the styling corresponding to invalid email status
    clearInvalidEmailStyle();

    // take out from sight the main page
    mainPage.style.marginLeft = "-100%";

    // get in the response page
    responsePage.style.marginLeft = "0";
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
  responsePage.style.marginLeft = "100%";

  // show main page
  mainPage.style.marginLeft = "0";
}
