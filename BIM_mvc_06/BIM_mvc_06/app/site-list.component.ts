import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SiteService } from './site.service'

@Component({
    selector: 'site-list',
    template: `<h2>list</h2>
                <h2>{{errorMessage}}</h2>
                <ul class= "items">
                <li (click)= "onSelect(site)" *ngFor = "let site of sites">
                <span class = "badge">
               {{site.name}}</span>{{site.name}}</li>
                   </ul>

<input type="text" [(ngModel)]="myModel.name"/>
<input type="text" [(ngModel)]="myModel.password"/>
    {{myModel}}


    {{myModel}}

<input (click)= "onSubmit(myModel)" type="submit" value = "submit" />


{{sites1.id}}`
})

export class SiteListComponent implements OnInit {
    myModel = [];
    sites = [];
    sites1 = [];
    errorMessage: string;
    constructor(private _siteService: SiteService, private router: Router) { }
    ngOnInit() {
        //this.sites = this._siteService.getSites();
        this._siteService.getSites()
            .subscribe(resSiteData => this.sites = resSiteData,
            resSiteError => this.errorMessage = resSiteError);
        //this._siteService.getSites1(this.myModel);
       /* this._siteService.getSites1()
            .subscribe(resSiteData => this.sites1 = resSiteData,
            resSiteError => this.errorMessage = resSiteError);*/
    }

    onSelect(site) {
        this.router.navigate(['/details',site.id]);
    }

    onSubmit(testt) {

        console.log(testt);
        var Obj = {
            name: testt.name,
            password: testt.password,
        };
        this.myModel = testt;
        this._siteService.getSites1(Obj);

    }

}