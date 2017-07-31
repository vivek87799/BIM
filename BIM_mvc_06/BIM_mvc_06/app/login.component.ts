import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SiteService } from './site.service'

@Component({
    selector: 'login-comp',
    template: `<h2>Login</h2>
                <h2>{{errorMessage}}</h2>
             
<input type="text" [(ngModel)]="myModel.name"/>
<input type="password" [(ngModel)]="myModel.password"/>
    {{myModel}}


    {{myModel}}

<input (click)= "onSubmit(myModel)" type="submit" value = "submit" />


{{validid}}`
})

export class LoginComponent implements OnInit {
    myModel = [];
    sites = [];
    sites1 = [];
    validid: boolean;
    errorMessage: string;
    constructor(private _siteService: SiteService, private router: Router) { }
    ngOnInit() {
        //this.sites = this._siteService.getSites();
        this._siteService.getSites()
            .subscribe(resSiteData => this.sites = resSiteData,
            resSiteError => this.errorMessage = resSiteError);
        //this._siteService.getSites1(this.myModel);

    }

    onSubmit(user) {

        var Obj = {
            name: user.name,
            password: user.password,
        };
        this.myModel = user;
        this._siteService.getUserValidate(Obj)
            .subscribe(resSiteData => this.validid = resSiteData,
            resSiteError => this.errorMessage = resSiteError);

    }

}