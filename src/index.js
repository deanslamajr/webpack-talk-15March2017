import createButton from './createButton';
import addAlertToButton from './addAlertToButton';

const messages = [ 'hello world', 'hello world again' ];

const buttons = messages.map(createButton);

buttons.forEach((button, index) => {
  // add behaviors to buttons
  addAlertToButton(button, messages[index]);
  // add buttons to DOM
  document.body.appendChild(button);
});