export interface Dictionary {
  segment: string;
  translation: string
}

export interface TranslaterResponse {
  responseData: {
    translatedText: string
  }
}

export interface Settings {
  originLang: string;
  studiedLang: string;
  wordCount: string;
  exerciseTime: string;
}
