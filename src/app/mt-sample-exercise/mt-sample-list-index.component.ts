import { Component } from '@angular/core';
import { DataService } from './data.service';
import { SelectedFarmService } from './selected-farm.service';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Farm } from './farm';

import mockData from './mock-data.json';

@Component({
  selector: 'mt-sample-list',
  templateUrl: './mt-sample-list-index.component.html',
})
export class MtSampleListIndexComponent {
  displayedColumns: string[] = ['FarmNo', 'FarmName', 'ActiveDate'];
  dataSource: Farm[] = [];
  filterOptions: Array<any> = [
    { name: 'All' },
    { name: 'No' },
    { name: 'Active Date' },
  ];
  filterSource: Farm[] = [];
  selectedFilter: any;
  constructor() {
    this.dataSource = mockData;
  }

  filterItems(arr, query, column) {
    return arr.filter((el) =>
      el[column].toLowerCase().startsWith(query.toLowerCase())
    );
  }

  onFilterChange(event: any) {
    this.selectedFilter = event;
    if (event.name === 'No') {
      this.filterSource = this.filterItems(this.dataSource, '100', 'FarmNo');
    } else if (event.name === 'Active Date') {
      this.filterSource = this.filterItems(
        this.dataSource,
        '2020',
        'ActiveDate'
      );
    } else {
      this.filterSource = this.dataSource;
    }
  }
}
