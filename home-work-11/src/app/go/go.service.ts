import {Injectable} from '@angular/core';
import {ResentlyAddedService} from "../recently-added/resently-added.service";

@Injectable({
  providedIn: 'root'
})
export class GoService {

  constructor(public resentlyAddedService: ResentlyAddedService) {
  }

  checkWord(word: string, currentWord: string) {
    return word === currentWord
  }
}
