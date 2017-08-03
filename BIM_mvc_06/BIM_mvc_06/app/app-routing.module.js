"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var site_list_component_1 = require("./site-list.component");
var site_details_component_1 = require("./site-details.component");
var login_component_1 = require("./login.component");
var elements_list_component_1 = require("./elements-list.component");
var routes = [
    { path: 'list', component: site_list_component_1.SiteListComponent },
    { path: 'details', component: site_details_component_1.SiteDetailsComponent },
    { path: 'details/:id', component: site_details_component_1.SiteDetailsComponent },
    { path: 'elements', component: elements_list_component_1.ElementsListComponent },
    { path: 'elements/:id', component: elements_list_component_1.ElementsListComponent },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(routes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
exports.routingComponents = [site_list_component_1.SiteListComponent, site_details_component_1.SiteDetailsComponent, login_component_1.LoginComponent, elements_list_component_1.ElementsListComponent];
//# sourceMappingURL=app-routing.module.js.map