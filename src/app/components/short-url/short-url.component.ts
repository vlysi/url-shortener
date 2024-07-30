import { Component } from '@angular/core';
import { ShortUrlService } from 'src/app/services/short-url.service';

@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.css']
})
export class ShortUrlComponent {

  longUrl: string;
  urlShort: string;
  urlProcessed: boolean;
  loading: boolean;

  constructor(private _shortUrlService: ShortUrlService){
    this.longUrl = '';
    this.urlShort = '';
    this.urlProcessed = false;
    this.loading = false;
  }

  processUrl(){
    this.urlProcessed = false;
    this.loading = true;

    this._shortUrlService.getUrlShort(this.longUrl).subscribe(data => {
      console.log(data)
      this.loading = false;
      this.urlProcessed = true;
      this.urlShort = data.link;
    })
  }
}
