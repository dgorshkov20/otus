import {Component, SimpleChanges} from '@angular/core';
import {ResentlyAddedService} from "./resently-added.service";
import {Dictionary} from "../../types";

@Component({
  selector: 'app-recently-added',
  templateUrl: './recently-added.component.html',
  styleUrls: ['./recently-added.component.css'],
})
export class RecentlyAddedComponent {
  value: string = ''
  dictionary: Dictionary[] = []
  translation: string | undefined

  constructor(public resentlyAddedService: ResentlyAddedService) {
  }

  ngAfterContentInit() {
    this.dictionary = this.resentlyAddedService.getWords()
  }

  onChange(event: Event) {
    this.value = (event.target as HTMLInputElement).value
  }

  translate() {
    this.resentlyAddedService.getTranslate(this.value)
      .subscribe({
        next: result => {
          this.translation = result.responseData.translatedText
        }
      })
  }

  save() {
    if (this.value) {
      const dictionary = this.resentlyAddedService.addWords(this.value)

      if (dictionary) {
        this.dictionary = dictionary
      }
    }
  }
}
