export interface Dictionary {
  segment: string;
  translation: string
}

export interface TranslaterResponse {
  responseData: {
    translatedText: string
  }
}
