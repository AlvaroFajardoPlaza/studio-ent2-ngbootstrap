import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from 'src/app/data/models/Photo.interface';
import { ApiJsonPlaceholderPhotosService } from 'src/app/data/services/api-json-placeholder-photos.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss'],
})
export class PhotoListComponent {
  photos$?: Observable<Array<Photo>>;

  constructor(private _apiService: ApiJsonPlaceholderPhotosService) {
    this.photos$ = this._apiService.getPhotos();
  }
}
