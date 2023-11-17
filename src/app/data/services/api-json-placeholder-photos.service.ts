import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from '../models/Photo.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiJsonPlaceholderPhotosService {
  // prefix: string

  constructor(private _http: HttpClient) {}

  getPhotos(): Observable<Array<Photo>> {
    return this._http.get<Array<Photo>>(
      `https://jsonplaceholder.typicode.com/photos`
    );
  }
}
