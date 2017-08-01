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
var LoginComponent = (function () {
    function LoginComponent(_siteService, router) {
        this._siteService = _siteService;
        this.router = router;
        this.myModel = [];
        this.sites = [];
        this.sites1 = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.sites = this._siteService.getSites();
        this._siteService.getSites()
            .subscribe(function (resSiteData) { return _this.sites = resSiteData; }, function (resSiteError) { return _this.errorMessage = resSiteError; });
        //this._siteService.getSites1(this.myModel);
    };
    LoginComponent.prototype.onSubmit = function (user) {
        var _this = this;
        var Obj = {
            name: user.name,
            password: user.password,
        };
        this.myModel = user;
        this._siteService.getUserValidate(Obj)
            .subscribe(function (resSiteData) { return _this.validid = resSiteData; }, function (resSiteError) { return _this.errorMessage = resSiteError; });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login-comp',
        template: "<h2>Login</h2>\n                <h2>{{errorMessage}}</h2>\n             \n<p>Name</p>\n<input type=\"text\" [(ngModel)]=\"myModel.name\"/>\n<p>Password</p>\n<input type=\"password\" [(ngModel)]=\"myModel.password\"/>\n    {{myModel}}\n\n\n    {{myModel}}\n\n<input (click)= \"onSubmit(myModel)\" type=\"submit\" value = \"Login\" />\n\n\n{{validid}}"
    }),
    __metadata("design:paramtypes", [site_service_1.SiteService, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map