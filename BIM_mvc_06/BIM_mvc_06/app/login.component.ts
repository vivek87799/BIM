import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SiteService } from './site.service'

@Component({
    selector: 'login-comp',
    styleUrls: ['app/login.component.css'],
    template: `<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">

                <h2>{{errorMessage}}</h2>
   
<div class="container" *ngIf="validid == false">
    
    
        <div class="col-lg-offset-4 col-lg-5">
<div class="form-login">
<h4>Login</h4>
<input type="text" class="form-control input-lg chat-input" placeholder="username" [(ngModel)]="myModel.name"/>

<input type="password" class="form-control input-lg chat-input" placeholder="password" [(ngModel)]="myModel.password"/>

<div class="wrapper">
<span class="group-btn">
<input (click)= "onSubmit(myModel)" class="btn btn-primary btn-lg" type="submit" value = "Login" />
</span>
</div>
</div>
</div>
</div>    
<div *ngIf="validid == true">
<div><site-list  [hidden]="siteListShown"></site-list></div>
</div>`
    
})

export class LoginComponent implements OnInit {
    //@Input() hidden:boolean;
    myModel = [];
    sites = [];
    sites1 = [];
    //validid: boolean;
    errorMessage: string;
    validid = false;

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