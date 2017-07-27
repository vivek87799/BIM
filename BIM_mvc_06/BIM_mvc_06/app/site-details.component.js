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
var site_service_1 = require("./site.service");
var SiteDetailsComponent = (function () {
    function SiteDetailsComponent(_siteService) {
        this._siteService = _siteService;
        this.sites = [];
    }
    SiteDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.sites = this._siteService.getSites();
        this._siteService.getSites()
            .subscribe(function (resSiteData) { return _this.sites = resSiteData; }, function (resSiteError) { return _this.errorMessage = resSiteError; });
    };
    return SiteDetailsComponent;
}());
SiteDetailsComponent = __decorate([
    core_1.Component({
        selector: 'site-details',
        template: "<h2></h2>\n                <h3>{{errorMessage}}</h3>\n                <ul *ngFor = \"let site of sites\">\n                <li>{{site.id}} - {{site.name}}</li>\n                   </ul>"
    }),
    __metadata("design:paramtypes", [site_service_1.SiteService])
], SiteDetailsComponent);
exports.SiteDetailsComponent = SiteDetailsComponent;
//# sourceMappingURL=site-details.component.js.map