var createButton = require('./createButton');
var addAlertToButton = require('./addAlertToButton');

var messages = [ 'hello world', 'hello world again' ];

var buttons = messages.map(createButton);

buttons.forEach(function(button, index) {
  // add behaviors to buttons
  addAlertToButton(button, messages[index]);
  // add buttons to DOM
  document.body.appendChild(button);
});