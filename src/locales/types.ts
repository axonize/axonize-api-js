export type Language = 'en' | 'de' | 'es' | 'he' | 'it' | 'fr' | 'nl';
export type LongLanguage = 'en' | 'de' | 'es' | 'he' | 'it' | 'fr' | 'nl';

export interface ILocales {
  [key: string]: string;
}

export interface ISupportedLanguage {
  key: Language;
  value: LongLanguage;
}
