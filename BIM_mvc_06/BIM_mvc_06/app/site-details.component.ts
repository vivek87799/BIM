import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { SiteService } from './site.service';

@Component({
    selector: 'site-details',
    template: `<h2>Selected site id is = {{siteId}}</h2>

                <a (click)= "goPrevious()">Back</a>
                <a (click)= "goNext()">Next</a>


                <h3>{{errorMessage}}</h3>

                <ul *ngFor = "let site of sites">
                <li>{{site.id}} - {{site.name}}</li>
                   </ul>`
})

export class SiteDetailsComponent {
    myModel: any;
    public  siteId;
    sites = [];
    errorMessage: string;
    constructor(private _siteService: SiteService, private route: ActivatedRoute, private router: Router) { }
    /*ngOnInit() {
        //this.sites = this._siteService.getSites();
        let id = this.route.snapshot.params['id'];
        this.siteId = id;
        this._siteService.getSites()
            .subscribe(resSiteData => this.sites = resSiteData,
            resSiteError => this.errorMessage = resSiteError);
    } */

    ngOnInit() {
        //this.sites = this._siteService.getSites();

        this.route.params.subscribe((params: Params) => {
            let id = parseInt(params['id']);
            this.siteId = id;
        })
        
        this._siteService.getSites()
            .subscribe(resSiteData => this.sites = resSiteData,
            resSiteError => this.errorMessage = resSiteError);
    }
    goPrevious() {
        let prevId = parseInt(this.siteId) - 1;
        this.router.navigate(['/details', prevId]);

    }

    goNext() {
        let nextId = parseInt(this.siteId) + 1;
        this.router.navigate(['/details', nextId]);
    }

}

