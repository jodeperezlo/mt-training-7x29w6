import { Component } from '@angular/core';

import { DataService } from './mt-sample-exercise/data.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'MTech';
  data: any;
  constructor(private _dataService: DataService) {}
  ngOnInit() {}
}
