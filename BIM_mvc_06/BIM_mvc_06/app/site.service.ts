import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, RequestOptions, Headers  } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';



@Injectable()
export class SiteService {
    site = [];

    //private _url: string = "http://admin:admin@localhost:5984/bim/_design/user_detail/_view/user_credential"

    private _url: string = "./app/test.json"
    private _urlpost: string = "/Home/postMethod1"
    constructor(private _http: Http) { }
    getSites() {
        return this._http.get(this._url) // returns an observable
            .map((response: Response) => response.json()) // .map converts observable to response of json format
            .catch(this._errorHandler); // to handle the http error
    }

    getSites1(dd: any) {
        console.log(dd);
        let id = 'id';
        let name1 = 'name';

        /*let urlSearchParams = new URLSearchParams();
        urlSearchParams.append(id,'1');
        urlSearchParams.append(name, 'Chitti');

        let body = urlSearchParams.toString()
        let bodyString = JSON.stringify({name}); 

 */

        let headers = new Headers({
            'Content-Type':
            'application/json; charset=utf-8'
        }); 
        let options = new RequestOptions({ headers: headers });
        console.log("calling the post");
        return this._http.post(this._urlpost, JSON.stringify(dd), options)
            .subscribe();

       /* console.log(this._http.post(this._urlpost, bodyString, headers) // returns an observable
            .map((response: Response) => response.json()) // .map converts observable to response of json format
            .catch(this._errorHandler)
            .subscribe(resSiteData => this.site = resSiteData));
        */
        
        /*return this._http.post(this._urlpost, bodyString, headers) // returns an observable
            .map((response: Response) => response.json()) // .map converts observable to response of json format
            .catch(this._errorHandler)
            .subscribe(resSiteData => this.site = resSiteData); // to handle the http error

        */
       // var headers = new Headers();
        //headers.append('Content-Type', 'application/json');
        //return this._http.post(this._urlpost,
          //  { firstName: 'Joe' }, headers
            //)
            //.map((res: Response) => res.json())
            //.subscribe();
    }

    _errorHandler(error: Response) {
        console.error();
        return Observable.throw(error || "Server Error");
    }
}

