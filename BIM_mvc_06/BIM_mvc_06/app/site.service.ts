import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';



@Injectable()
export class SiteService {
    
    //private _url: string = "http://admin:admin@localhost:5984/bim/_design/user_detail/_view/user_credential"

    private _url: string = "./app/test.json"
    constructor(private _http: Http) { }
    getSites() {
        return this._http.get(this._url) // returns an observable
            .map((response: Response) => response.json()) // .map converts observable to response of json format
            .catch(this._errorHandler); // to handle the http error
    }

    _errorHandler(error: Response) {
        console.error();
        return Observable.throw(error || "Server Error");
    }
}