import { Component } from '@angular/core';
import {GoService} from "./go.service";

@Component({
  selector: 'app-go',
  templateUrl: './go.component.html',
  styleUrls: ['./go.component.css']
})
export class GoComponent {
  constructor(public goService: GoService) {
  }

  ngAfterViewInit() {
    console.log(this.goService.checkWord('Hello'))
  }
}
