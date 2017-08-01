import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SiteService } from './site.service'

@Component({
    selector: 'site-list',
    template: `<h2>Sites</h2>
                <h2>{{errorMessage}}</h2>
                <ul class= "items">
                <li (click)= "onSelect(site)" *ngFor = "let site of sites">
                <span class = "badge">
               {{site.siteid}}</span>{{site.sitename}}</li>
                   </ul>
               <router-outlet></router-outlet>

{{validid}}`


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