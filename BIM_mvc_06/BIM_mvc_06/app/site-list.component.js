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
var router_1 = require("@angular/router");
var site_service_1 = require("./site.service");
var SiteListComponent = (function () {
    function SiteListComponent(_siteService, router) {
        this._siteService = _siteService;
        this.router = router;
        this.myModel = [];
        this.sites = [];
        this.sites1 = [];
    }
    SiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.sites = this._siteService.getSites();
        this._siteService.getSitesList()
            .subscribe(function (resSiteData) { return _this.sites = resSiteData; }, function (resSiteError) { return _this.errorMessage = resSiteError; });
        //this._siteService.getSites1(this.myModel);
    };
    SiteListComponent.prototype.onSelect = function (site) {
        this.router.navigate(['/elements', site.siteid]);
    };
    SiteListComponent.prototype.onSubmit = function (testt) {
        var _this = this;
        console.log(testt);
        var Obj = {
            name: testt.name,
            password: testt.password,
        };
        this.myModel = testt;
        this._siteService.getSites1(Obj)
            .subscribe(function (resSiteData) { return _this.validid = resSiteData; }, function (resSiteError) { return _this.errorMessage = resSiteError; });
    };
    return SiteListComponent;
}());
SiteListComponent = __decorate([
    core_1.Component({
        selector: 'site-list',
        template: "<h2>Sites</h2>\n                <h2>{{errorMessage}}</h2>\n                <ul class= \"items\">\n                <li (click)= \"onSelect(site)\" *ngFor = \"let site of sites\">\n                <span class = \"badge\">\n               {{site.siteid}}</span>{{site.sitename}}</li>\n                   </ul>\n               <router-outlet></router-outlet>\n\n{{validid}}"
    }),
    __metadata("design:paramtypes", [site_service_1.SiteService, router_1.Router])
], SiteListComponent);
exports.SiteListComponent = SiteListComponent;
//# sourceMappingURL=site-list.component.js.map