import React, { createContext, useContext, useEffect, useState } from 'react';
import { ELanguages, TRANSLATION_ACTIONS } from '../consts';
import i18n from 'i18next';
const TRANSLATION_ACTION = {
  TOGGLE: 'toggle'
};

const defaultLanguage = ELanguages.ENGLISH;

interface ITranslationContext {
  language: ELanguages;
  translationReducer: (action: TRANSLATION_ACTIONS, payload?: any) => void;
}

const translationContextDefaultValue: ITranslationContext = {
  language: defaultLanguage,
  translationReducer: () => {}
};

const TranslationContext = createContext<ITranslationContext>(translationContextDefaultValue);

export function TranslationProvider({ children }: { children?: JSX.Element }) {
  const [language, setLanguage] = useState<ELanguages>(defaultLanguage);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  const translationReducer = (action: TRANSLATION_ACTIONS, payload?: any) => {
    switch (action) {
      case TRANSLATION_ACTION.TOGGLE:
        setLanguage(prev => {
          if (prev === ELanguages.ENGLISH) {
            return ELanguages.VIETNAM;
          }
          return ELanguages.ENGLISH;
        });
        break;
      default:
        break;
    }
  };

  return (
    <TranslationContext.Provider value={{ language, translationReducer }}>
      {children}
    </TranslationContext.Provider>
  );
}

export const useTranslationContext = () => {
  return useContext(TranslationContext);
};
