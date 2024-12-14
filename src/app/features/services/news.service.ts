import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) {}

  newsCategoryURL = '/json/news_category-listing.json';
  newsListingURL = '/json/news_listing.json';

  getNewsCategories(): Observable<any> {
    return this.http.get(this.newsCategoryURL);
  }

  getNewsListing(): Observable<any> {
    return this.http.get(this.newsListingURL);
  }
}
