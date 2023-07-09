const fields = document.querySelectorAll('[data-field]');
let inputField, outputField;

const buttons = document.querySelectorAll('[data-button]');
let encryptButton, decryptButton, copyButton, confirmButton;

const alert = document.querySelectorAll('[data-alert]');
let alertPopup, alertTitle, alertDescription;

fields.forEach(field => {
  switch (field.dataset.field) {
    case 'input':
      inputField = field;
      break;
    
    case 'output':
      outputField = field;
      break;
    
    default:
      break;
  }
});

buttons.forEach(button => {
  switch (button.dataset.button) {
    case 'encrypt':
      encryptButton = button;
      break;
    
    case 'decrypt':
      decryptButton = button;
      break;
    
    case 'copy':
      copyButton = button;
      break;
    
    case 'confirm':
      confirmButton = button;
      break;
    
    default:
      break;
  }
});

alert.forEach(alert => {
  switch (alert.dataset.alert) {
    case 'title':
      alertTitle = alert;
      break;
    
    case 'description':
      alertDescription = alert;
      break;
    
    default:
      alertPopup = alert;
      break;
  }
})

export { 
  inputField, outputField, 
  encryptButton, decryptButton, copyButton, confirmButton, 
  alertPopup as alert, alertTitle, alertDescription 
};
