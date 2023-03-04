import {Injectable} from '@angular/core';
import {ResentlyAddedService} from "../recently-added/resently-added.service";

@Injectable({
  providedIn: 'root'
})
export class GoService {

  constructor(public resentlyAddedService: ResentlyAddedService) {
  }

  checkWord(word: string) {
    const words = this.resentlyAddedService.getWords() || []
    const findTranslation = words.find((wordObj: any) =>
      wordObj.translation.toLowerCase() === word.toLowerCase())

    return findTranslation ? 'Верно' : 'Неверно'
  }
}
