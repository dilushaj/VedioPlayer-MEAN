import {Injectable} from '@angular/core';
import {Http, Response , Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { Vedio } from './vedio';


@Injectable({
  providedIn: 'root'
})
export class VedioService {

  private _getUrl = '/api/vedios';
  private _postUrl = '/api/vedio';
  private _putUrl = '/api/vedio/';
  private _deleteUrl = '/api/vedio/';
  private _getAdminUrl = '/api/admin';
  constructor(private _http: Http) {
  }

  getVedios() {
    return this._http.get(this._getUrl)
      .map((response: Response) => response.json());
  }

  addVedio(vedio: Vedio) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this._http.post(this._postUrl,  JSON.stringify(vedio), options)
      .map((response: Response) => response.json());

  }

  updateVedio(vedio: Vedio) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this._http.put(this._putUrl + vedio._id, JSON.stringify(vedio), options)
      .map((response: Response) => response.json());

  }
  deleteVedio(vedio: Vedio) {
    return this._http.delete(this._deleteUrl + vedio._id)
      .map((response: Response) => response.json());
    }
  getAdminVedios() {
    return this._http.get(this._getAdminUrl)
      .map((response: Response) => response.json());
  }
}





