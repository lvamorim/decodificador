import popup from './popup.js';
import { outputField } from './selectors.js';

const copyText = async() => {
  outputField.select();
  
  try {
    navigator.clipboard
      ? await navigator.clipboard.writeText(outputField.value)
      : document.execCommand('copy');
    
    popup(
      'Texto copiado',
      'O texto foi copiado com sucesso para a área de transferência.'
    );
  }

  catch (error) {
    console.log(error);

    popup(
      'Falha ao copiar texto',
      'Algo de errado ocorreu. Por favor, tente novamente.'
    );
  }

  outputField.blur();
};

export default copyText;
