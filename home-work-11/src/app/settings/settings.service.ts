import { Injectable } from '@angular/core';
import {Settings} from "../../types";


@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  getSettings(): Settings {
    return JSON.parse(localStorage.getItem('settings') as string)
  }

  setSettings(settings: Settings) {
    localStorage.setItem('settings', JSON.stringify(settings))
  }
}
