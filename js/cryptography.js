import { entries, keys, values } from './cryptographyEntries.js';
import validation from './validation.js';
import { inputField, encryptButton, decryptButton } from './selectors.js';

const cryptography = (event) => {
  const inputText = inputField.value;
  let pattern, outputText;
  
  switch (event.target) {
    case encryptButton:
      pattern = new RegExp(keys, 'g');
      outputText = inputText.replace(pattern, match => entries[match]);
      break;
  
    case decryptButton:
      pattern = new RegExp(values, 'g');
      outputText = inputText.replace(pattern, match => 
        Object.keys(entries).find(key => entries[key] === match)
      );
      break;
    
    default:
      break;
  };
  
  validation(outputText);

  return outputText;
};

export default cryptography;
