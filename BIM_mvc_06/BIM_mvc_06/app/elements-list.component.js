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
var ElementsListComponent = (function () {
    function ElementsListComponent(_siteService, route, router) {
        this._siteService = _siteService;
        this.route = route;
        this.router = router;
        this.myModel = [];
        this.elements = [];
        this.sites1 = [];
    }
    ElementsListComponent.prototype.reloadWithNewId = function (id) {
        this.router.navigate(['/elements', this.siteId]);
    };
    ElementsListComponent.prototype.ngOnInit = function () {
        //this.sites = this._siteService.getSites();
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = parseInt(params['id']);
            _this.siteId = id;
            var Obj = {
                siteId: _this.siteId,
            };
            _this._siteService.getElementsList(Obj)
                .subscribe(function (resElementData) { return _this.elements = resElementData; }, function (resElementError) { return _this.errorMessage = resElementError; });
        });
    };
    // On selecting the element this method is used to get the corresponding status of the elements 
    ElementsListComponent.prototype.onSelect = function (element) {
        // this.router.navigate(['/details', site.id]);
    };
    ElementsListComponent.prototype.onSubmit = function (testt) {
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
    return ElementsListComponent;
}());
ElementsListComponent = __decorate([
    core_1.Component({
        selector: 'elements-list',
        template: "<h2>Elements </h2>\n                <h2>{{errorMessage}}</h2>\n{{id}}\n \n\n                <ul class= \"items\">\n                <li (click)= \"onSelect(element)\" *ngFor = \"let element of elements\">\n                <span class = \"badge\">\n               {{element.elementid}} {{element.elementname}} {{element.category}} {{element.status}}</span>\n\n                </li>\n                </ul>"
    }),
    __metadata("design:paramtypes", [site_service_1.SiteService, router_1.ActivatedRoute, router_1.Router])
], ElementsListComponent);
exports.ElementsListComponent = ElementsListComponent;
//# sourceMappingURL=elements-list.component.js.map