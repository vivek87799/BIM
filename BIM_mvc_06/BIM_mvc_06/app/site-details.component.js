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
var SiteDetailsComponent = (function () {
    function SiteDetailsComponent(_siteService, route, router) {
        this._siteService = _siteService;
        this.route = route;
        this.router = router;
        this.sites = [];
    }
    /*ngOnInit() {
        //this.sites = this._siteService.getSites();
        let id = this.route.snapshot.params['id'];
        this.siteId = id;
        this._siteService.getSites()
            .subscribe(resSiteData => this.sites = resSiteData,
            resSiteError => this.errorMessage = resSiteError);
    } */
    SiteDetailsComponent.prototype.ngOnInit = function () {
        //this.sites = this._siteService.getSites();
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = parseInt(params['id']);
            _this.siteId = id;
        });
        this._siteService.getSites()
            .subscribe(function (resSiteData) { return _this.sites = resSiteData; }, function (resSiteError) { return _this.errorMessage = resSiteError; });
    };
    SiteDetailsComponent.prototype.goPrevious = function () {
        var prevId = parseInt(this.siteId) - 1;
        this.router.navigate(['/details', prevId]);
    };
    SiteDetailsComponent.prototype.goNext = function () {
        var nextId = parseInt(this.siteId) + 1;
        this.router.navigate(['/details', nextId]);
    };
    return SiteDetailsComponent;
}());
SiteDetailsComponent = __decorate([
    core_1.Component({
        selector: 'site-details',
        template: "<h2>Selected site id is = {{siteId}}</h2>\n\n                <a (click)= \"goPrevious()\">Back</a>\n                <a (click)= \"goNext()\">Next</a>\n\n\n                <h3>{{errorMessage}}</h3>\n\n                <ul *ngFor = \"let site of sites\">\n                <li>{{site.id}} - {{site.name}}</li>\n                   </ul>"
    }),
    __metadata("design:paramtypes", [site_service_1.SiteService, router_1.ActivatedRoute, router_1.Router])
], SiteDetailsComponent);
exports.SiteDetailsComponent = SiteDetailsComponent;
//# sourceMappingURL=site-details.component.js.map