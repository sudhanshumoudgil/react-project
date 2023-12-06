import React from 'react';
import { TranslationController, TranslationProvider } from 'i18n-dialect';

// ------- i18n related

export const i18nCtrl = new TranslationController(
  (lang, onReady) => { // translationGetter
    fetch('/ru.json')
      .then((response) => response.text())
      .then((contents) => onReady(lang, contents));
  },
  (e) => console.error(e), // onFailedSubstitution 
  (n) => n != 1 // defaultPluralSelect -> english
);

export const i18n = new TranslationProvider(i18nCtrl);

// -------- App related

export function getRandomTitle() {
  const titles = [ // Should be evaluated each time, otherwise localized names will not be shown
    i18n._pt('Random titles', "John"),
    i18n._pt('Random titles', "Mary"),
    i18n._pt('Random titles', "Bob"),
    i18n._pt('Random titles', "Alice"),
    i18n._pt('Random titles', "Charlie"),
    i18n._pt('Random titles', "Kate"),
    i18n._pt('Random titles', "Lynn"),
    i18n._pt('Random titles', "Bill")
  ];

  return titles[Math.floor(Math.random() * titles.length)];
}

// Primitive macro which outputs hyperscript
export function embraceWithCode(string) {
  let pieces = string.split('`');
  let output = [];
  for (let i = 0; i < pieces.length; i+=2) {
    output.push(pieces[i]);
    output.push(<code>{pieces[i + 1]}</code>);
  }

  return output;
}
