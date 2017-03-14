function createButton(name) {
  // create buttons
  const buttonElement = document.createElement('input');
  buttonElement.type = 'button';
  buttonElement.value = name;

  return buttonElement
}

export default createButton;