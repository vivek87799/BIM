import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SiteService } from './site.service'

@Component({
    selector: 'site-list',
    styleUrls: ['app/site-list.component.css'],
    template: `

<div class="col-lg-4">
<div class='main-nav'>
    <div class='navbar navbar-inverse'>
        <div class='navbar-header'>
            <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
                <span class='sr-only'>Toggle navigation</span>
                <span class='icon-bar'></span>
                <span class='icon-bar'></span>
                <span class='icon-bar'></span>
            </button>
            <a class='navbar-brand' [routerLink]="['/list']">List of Construction sites</a>
        </div>
        <div class='clearfix'></div>
        <div class='navbar-collapse collapse'>
            <ul class='nav navbar-nav'>
                <li [routerLinkActive]="['link-active']" (click)= "onSelect(site)" *ngFor = "let site of sites">
                <a [routerLink]="['/']">
                   
                        <span class='glyphicon glyphicon-home'></span> {{site.siteid}} {{site.sitename}}</a>
                   
                </li>
            </ul>

        </div>
    </div>
</div>
</div>
<div class="col-lg-8">
<router-outlet></router-outlet>
</div>

`


})

export class SiteListComponent implements OnInit {
    
    myModel = [];
    sites = [];
    sites1 = [];
    validid: boolean;
    errorMessage: string;
    constructor(private _siteService: SiteService, private router: Router) { }
    ngOnInit() {
        //this.sites = this._siteService.getSites();
        this._siteService.getSitesList()
            .subscribe(resSiteData => this.sites = resSiteData,
            resSiteError => this.errorMessage = resSiteError);
        //this._siteService.getSites1(this.myModel);
       
    }

    onSelect(site) {
        this.router.navigate(['/elements',site.siteid]);
    }

    onSubmit(testt) {

        console.log(testt);
        var Obj = {
            name: testt.name,
            password: testt.password,
        };
        this.myModel = testt;
        this._siteService.getSites1(Obj)
            .subscribe(resSiteData => this.validid = resSiteData,
            resSiteError => this.errorMessage = resSiteError);

    }

}