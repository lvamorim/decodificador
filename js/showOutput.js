import { outputField } from './selectors.js';
const placeholder = document.querySelector('.placeholder');
const outputContainer = document.querySelector('.output-container');

const showOutput = (outputText) => {
  outputField.innerHTML = outputText;
  placeholder.classList.add('hidden');
  outputContainer.classList.remove('hidden');
};

export default showOutput;
