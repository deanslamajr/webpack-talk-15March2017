function addAlertToButton(buttonElement, message) {
  function doAlert() {
    alert(message);
  }

  buttonElement.onclick = doAlert;
}

export default addAlertToButton;