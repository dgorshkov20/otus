import {Component} from '@angular/core';
import {GoService} from "./go.service";
import {SettingsService} from "../settings/settings.service";
import {Dictionary} from "../../types";
import {ResentlyAddedService} from "../recently-added/resently-added.service";

@Component({
  selector: 'app-go',
  templateUrl: './go.component.html',
  styleUrls: ['./go.component.css']
})
export class GoComponent {
  start: boolean = false
  timer: number = 0
  wordCount: number = 0
  right: number = 0
  wrong: number = 0
  inputValue: string = ''
  timerId: number = 0
  currentWordIndex = 0
  words: Dictionary[] = []

  constructor(
    public goService: GoService,
    public settingsService: SettingsService,
    public resentlyAddedService: ResentlyAddedService
  ) {
  }

  ngOnInit() {
    const settings = this.settingsService.getSettings()

    this.timer = +settings.exerciseTime
    this.wordCount = +settings.wordCount
    this.words = this.resentlyAddedService.getWords().slice(0, +settings.wordCount)
  }

  startExercise() {
    const settings = this.settingsService.getSettings()
    this.start = true

    this.timerId = setInterval(() => {
      this.timer -= 1

      if (this.timer <= 0 || this.wordCount <= 0) {
        clearInterval(this.timerId)
        this.timer = +settings.exerciseTime
        this.start = false
        this.timerId = 0
      }
    }, 1000)
  }

  changeInputValue(event: Event) {
    this.inputValue = (event.target as HTMLInputElement).value
  }

  checkAnswer() {
    const isRightAnswer = this.goService.checkWord(
      this.inputValue,
      this.words[this.currentWordIndex].segment
    )
    this.currentWordIndex += 1
    this.wordCount -= 1
    this.inputValue = ''

    if (isRightAnswer) {
      this.right += 1
    } else {
      this.wrong += 1
    }
  }
}
