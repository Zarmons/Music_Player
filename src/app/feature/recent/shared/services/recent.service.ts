import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RecentService {

  token = "frkegmvVpBH1KpJ132k881nCfsOf81qdMqie3dzxwL6UuWEn1n1";
  httpOptions = { headers: new HttpHeaders({}) };
  readonly url = environment.url;

  constructor(private http: HttpClient) { }

  getUserHistory() {
    return this.http.get(this.url+'/user/me?access_token='+this.token, this.httpOptions);
  }
}
