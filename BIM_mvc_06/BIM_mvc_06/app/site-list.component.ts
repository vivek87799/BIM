import { Component,OnInit } from '@angular/core';
import { SiteService } from './site.service'

@Component({
    selector: 'site-list',
    template: `<h2></h2>
                <h2>{{errorMessage}}</h2>
                <ul *ngFor = "let site of sites">
                <li>{{site.name}}</li>
                   </ul>`
})

export class SiteListComponent implements OnInit {
    
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