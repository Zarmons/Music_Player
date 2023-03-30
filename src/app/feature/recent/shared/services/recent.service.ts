import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RecentService {

  httpOptions = { headers: new HttpHeaders({}) };
  readonly url = environment.url;

  constructor(private http: HttpClient) { }

  getUserHistory() {
    return this.http.get('https://api.deezer.com/user/me/history', this.httpOptions);
  }
}
