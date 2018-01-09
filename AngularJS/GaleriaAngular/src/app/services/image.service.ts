import { Injectable } from '@angular/core';
import { Image } from '../models/image';
import {Http, Response} from '@angular/http';
import 'rxjs/RX';
import {Observable} from 'rxjs/RX';
import 'rxjs/add/operator/catch';

@Injectable()
export class ImageService {
  constructor( private http: Http) { }

  getImages(): Observable<Image[]> {
    return this.http.get('http://127.0.0.1:8000/api/v1/images').map((response: Response) => response.json());
  }

  addImage(image: Object): Observable<Image[]> {
    return this.http.post('http://127.0.0.1:8000/api/v1/images', image)
    .map((res: Response) => res.json() )
    .catch((error: any) => Observable.throw(error.json().error || {message: 'error algo'}));
  }

}
