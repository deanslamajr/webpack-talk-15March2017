function createButton(name) {
  // create buttons
  var buttonElement = document.createElement('input');
  buttonElement.type = 'button';
  buttonElement.value = name;

  return buttonElement
}

module.exports = createButton;