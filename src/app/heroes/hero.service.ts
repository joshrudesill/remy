import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  data = 'Service Data';

  constructor(private http: HttpClient) {}

  get() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
