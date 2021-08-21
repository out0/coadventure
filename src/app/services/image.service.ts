import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private httpClient: HttpClient) { }

  getHotelListImage(hotelId: string): Observable<Blob> {
    if (hotelId == "0")
      return this.httpClient.get('10.0.0.32/img/aaaa', { responseType: 'blob' });
    else
      return this.httpClient.get('https://picsum.photos/200/300/?random', { responseType: 'blob' });
  }
}
