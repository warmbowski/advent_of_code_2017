import { input04 } from './04-input';

const isPassphraseSecure = (passphrase: string, includeAnagrams?: boolean ): boolean => {
  const words = passphrase.split(' ');
  const dict = new Set<string>();

  if (words.length < 1) return false;
  for (let i = 0; i < words.length; i++) {
    const word = includeAnagrams ? words[i].split('').sort().join('') : words[i];
    if (dict.has(word)) return false;
    dict.add(word);
  }
  return true;
};

const list = input04.split('\n');
console.log('first part:', list.reduce((a, c) => {
  return isPassphraseSecure(c) ? a + 1 : a;
}, 0));

console.log('second part:', list.reduce((a, c) => {
  return isPassphraseSecure(c, true) ? a + 1 : a;
}, 0));
