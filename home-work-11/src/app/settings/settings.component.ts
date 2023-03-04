import { Component } from '@angular/core';
import {SettingsService} from "./settings.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  originLang: string = 'Русский'
  studiedLang: string = 'Английский'
  wordCount: string = '10'
  exerciseTime: string = '60'

  constructor(private settingsService: SettingsService) {
  }

  onChangeWordCount(event: Event) {
    this.wordCount = (event.target as HTMLInputElement).value
  }

  onChangeExerciseTime(event: Event) {
    this.exerciseTime = (event.target as HTMLInputElement).value
  }

  ngOnInit() {
    const settings = this.settingsService.getSettings()
    if (settings) {
      this.exerciseTime = settings.exerciseTime
      this.wordCount = settings.wordCount
      this.originLang = settings.originLang
      this.studiedLang = settings.studiedLang
    }
  }

  saveSettings() {
    this.settingsService.setSettings({
      originLang: this.originLang,
      studiedLang: this.studiedLang,
      wordCount: this.wordCount,
      exerciseTime: this.exerciseTime,
    })
  }
}
