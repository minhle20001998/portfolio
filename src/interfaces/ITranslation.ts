import { ELabels, ELanguages } from '../consts';

export type ITranslation = {
  [language in ELanguages]: {
    translation: {
      [text in ELabels]: string;
    };
  };
};
