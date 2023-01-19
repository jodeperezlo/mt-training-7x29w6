import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private _http: HttpClient) {}
  getData() {
    return this._http.get('./mock-data.json');
  }
}
