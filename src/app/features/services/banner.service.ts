import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BannerService {
  constructor(private http: HttpClient) {}

  url = '/json/banner.json';

  getBannerData(): Observable<any> {
    return this.http.get(this.url);
  }
}
