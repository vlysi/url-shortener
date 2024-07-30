import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShortUrlService {

  url = 'https://api-ssl.bitly.com/v4/shorten';
  token = '123dad0ea40887d04786715c3c2328f221168d25';
  constructor(private http: HttpClient) { }

  getUrlShort(longUrl: string): Observable<any>{

    const tokenHeader = new HttpHeaders({Authorization: 'Bearer '+ this.token })
    const body = {
      long_url: longUrl
    }

    return this.http.post(this.url, body, { headers: tokenHeader})
  }
}
