import {Injectable} from '@angular/core';
import {Observable, switchMap} from "rxjs";
import {fromFetch} from "rxjs/fetch";
import {Dictionary, TranslaterResponse} from "../../types";

@Injectable({
  providedIn: 'root'
})
export class ResentlyAddedService {

  constructor() {
  }

  getWords(): Dictionary[] {
    return JSON.parse(localStorage.getItem('words') as string)
  }

  getTranslate(word: string): Observable<TranslaterResponse> {
    return fromFetch(`https://api.mymemory.translated.net/get?q=${word}&langpair=ru|en`)
      .pipe(switchMap((res) => res.json()))
  }

  addWords(word: string): Dictionary[] | undefined {
    const hasDictionary = localStorage.getItem('words')
    const dictionary: Dictionary[] = hasDictionary
      ? JSON.parse(localStorage.getItem('words') as string)
      : []
    const isExistWord = dictionary.find((item) => item.segment === word)

    if (!isExistWord) {
      this.getTranslate(word).subscribe({
        next: (res) => {
          dictionary.push({
            segment: word,
            translation: res.responseData.translatedText
          })

          localStorage.setItem('words', JSON.stringify(dictionary))
        }
      })

      return dictionary
    }

    return undefined
  }
}
