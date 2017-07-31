"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var SiteService = (function () {
    function SiteService(_http) {
        this._http = _http;
        this.site = [];
        //private _url: string = "http://admin:admin@localhost:5984/bim/_design/user_detail/_view/user_credential"
        this._url = "./app/test.json";
        this._urlpost = "/Login/postMethod1";
        this._urlsites = "/Home/getSiteList";
    }
    SiteService.prototype.getSites = function () {
        return this._http.get(this._url) // returns an observable
            .map(function (response) { return response.json(); }) // .map converts observable to response of json format
            .catch(this._errorHandler); // to handle the http error
    };
    SiteService.prototype.getSitesList = function () {
        return this._http.get(this._urlsites) // returns an observable
            .map(function (response) { return response.json(); }) // .map converts observable to response of json format
            .catch(this._errorHandler); // to handle the http error
    };
    SiteService.prototype.getUserValidate = function (user) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json; charset=utf-8'
        });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post(this._urlpost, JSON.stringify(user), options)
            .map(function (response) { return response.json(); })
            .catch(this._errorHandler); // to handle the http error
    };
    SiteService.prototype.getSites1 = function (dd) {
        console.log(dd);
        var id = 'id';
        var name1 = 'name';
        var headers = new http_1.Headers({
            'Content-Type': 'application/json; charset=utf-8'
        });
        var options = new http_1.RequestOptions({ headers: headers });
        console.log("calling the post");
        return this._http.post(this._urlpost, JSON.stringify(dd), options)
            .map(function (response) { return response.json(); })
            .catch(this._errorHandler); // to handle the http error
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
    };
    SiteService.prototype._errorHandler = function (error) {
        console.error();
        return Observable_1.Observable.throw(error || "Server Error");
    };
    return SiteService;
}());
SiteService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], SiteService);
exports.SiteService = SiteService;
//# sourceMappingURL=site.service.js.map