import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ComparisonTableService {

  constructor(public http: HttpClient) { }

  getImageData() {
    const requestUrl = 'https://jsonplaceholder.typicode.com/photos';
    return this.http.get(requestUrl);
  }
}
