import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Service {
  data = 'Service Data';

  constructor(private http: HttpClient) {}

  get() {
    console.log('getting');
    return this.http.get(`${environment.api.serverUrl}/api/messages/admin`);
  }
}
