import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {

  result:any;

  constructor(private _http: Http) { }

  getPosts() {
    return this._http.get("/api/tutorials")
      .map(result => this.result = result.json());
  }

}