import { keys } from './cryptographyEntries.js';
import showOutput from './showOutput.js';
import popup from './popup.js';
import { inputField } from './selectors.js';

const validation = (outputText) => {
  const regEx = /^[a-z.,!?\s]+$/;
  const inputText = inputField.value;
  const matchRegEx = inputText.match(regEx);
  const matchKeys = inputText.match(keys);

  (matchRegEx && matchKeys)
    && showOutput(outputText);

  !matchRegEx
    && popup(
      'Texto inválido', 
      'Apenas letras minúsculas e sem acento. Use vogais. Únicos caracteres permitidos: . , ! ?'
    );

  !matchKeys
    && popup(
      'Texto inválido', 
      'Por favor, use vogais.'
    );
  
  !inputText
    && popup(
      'Nenhum texto encontrado', 
      'Por favor, adicione um texto.'
    );
};

export default validation;
