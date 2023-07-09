import buttonDisabled from './buttonDisabled.js';
import cryptography from './cryptography.js';
import copyText from './copy.js';
import { inputField, encryptButton, decryptButton, copyButton } from './selectors.js';

window.addEventListener('load', buttonDisabled);
inputField.addEventListener('input', buttonDisabled);
encryptButton.addEventListener('click', cryptography);
decryptButton.addEventListener('click', cryptography);
copyButton.addEventListener('click', copyText);
