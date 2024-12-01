use client;

import { useLanguage } from '../contexts/LanguageContext';
import type { TranslationKey } from '../types/TranslationKey';

const translations = {
  en: {
    'hello': 'Hello',
    'world': 'World'
  },
  es: {
    'hello': 'Hola',
    'world': 'Mundo'
  }
};


const Warehouse = () => {
  const { language } = useLanguage();
  const t = (key: TranslationKey) => translations[language][key];

  return (
    <div>
      <h1>{t('hello')} {t('world')}</h1>
    </div>
  );
};

export default Warehouse;

