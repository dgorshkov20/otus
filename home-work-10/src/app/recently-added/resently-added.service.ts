import {Injectable} from '@angular/core';
import {Observable, switchMap} from "rxjs";
import {fromFetch} from "rxjs/fetch";
import {Dictionary, TranslaterResponse} from "../../types";

@Injectable({
  providedIn: 'root'
})
export class ResentlyAddedService {

  constructor(
  ) {
  }

  getWords(): Dictionary[] {
    return JSON.parse(localStorage.getItem('words') as string)
  }

  getTranslate(word: string): Observable<TranslaterResponse> {
    return fromFetch(`https://api.mymemory.translated.net/get?q=${word}&langpair=en|ru`)
      .pipe(switchMap((res) => res.json()))
  }

  addWords(word: string): void {
    const hasDictionary = localStorage.getItem('words')
    const dictionary = hasDictionary ? JSON.parse(localStorage.getItem('words') as string) : []

    this.getTranslate(word).subscribe({
      next: (res) => {
        dictionary.push({
          segment: word,
          translation: res.responseData.translatedText
        })

        localStorage.setItem('words', JSON.stringify(dictionary))
      }
    })

  }
}
