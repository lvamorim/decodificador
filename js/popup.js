import { alertTitle, alertDescription, alert, confirmButton } from './selectors.js';

const popup = (title, description) => {
  alertTitle.innerHTML = title;
  alertDescription.innerHTML = description;
  alert.classList.remove('hidden');
  confirmButton.addEventListener('click', () => alert.classList.add('hidden'));
};

export default popup;
