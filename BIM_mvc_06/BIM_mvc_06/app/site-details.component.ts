import { Component, OnInit } from '@angular/core';
import { SiteService } from './site.service';

@Component({
    selector: 'site-details',
    template: `<h2></h2>
                <h3>{{errorMessage}}</h3>
                <ul *ngFor = "let site of sites">
                <li>{{site.id}} - {{site.name}}</li>
                   </ul>`
})

export class SiteDetailsComponent {

    sites = [];
    errorMessage: string;
    constructor(private _siteService: SiteService) { }
    ngOnInit() {
        //this.sites = this._siteService.getSites();
        this._siteService.getSites()
            .subscribe(resSiteData => this.sites = resSiteData,
            resSiteError => this.errorMessage = resSiteError);

    }

}