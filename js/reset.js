import { inputField, encryptButton, decryptButton } from './selectors.js';

const buttonDisabled = () => {
  const emptyField = !inputField.value;
  const buttons = [encryptButton, decryptButton];

  buttons.forEach(button => {
    emptyField
      ? button.classList.add('disabled')
      : button.classList.remove('disabled');
  });
};

export default buttonDisabled;
