// create buttons
var buttonElement = document.createElement('input');
buttonElement.type = 'button';
buttonElement.value = 'hello world';
var buttonElement2 = document.createElement('input');
buttonElement2.type = 'button';
buttonElement2.value = 'hello world 2';

// add behaviors to buttons
buttonElement.onclick = doAlert;
buttonElement2.onclick = doAlert2;

// add buttons to DOM
document.body.appendChild(buttonElement);
document.body.appendChild(buttonElement2);


// alerts
var message = 'hello world!';
var message2 = 'hello world again!';

function doAlert() {
  alert(message);
}

function doAlert2() {
  alert(message2);
}