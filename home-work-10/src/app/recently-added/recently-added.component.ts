import {Component} from '@angular/core';
import {ResentlyAddedService} from "./resently-added.service";

@Component({
  selector: 'app-recently-added',
  templateUrl: './recently-added.component.html',
  styleUrls: ['./recently-added.component.css'],
})
export class RecentlyAddedComponent{
  constructor(public resentlyAddedService: ResentlyAddedService) {
  }

  ngAfterViewInit() {
    this.resentlyAddedService.getTranslate('Привет')
      .subscribe({next: result => console.log(result.responseData.translatedText)})
  }
}
