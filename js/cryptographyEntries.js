const entries = {
  'a': 'ai',
  'e': 'enter',
  'i': 'imes',
  'o': 'ober',
  'u': 'ufat',
};

const keys = `[${Object.keys(entries).join('')}]`;
const values = Object.values(entries).join('|');

export { entries, keys, values };
