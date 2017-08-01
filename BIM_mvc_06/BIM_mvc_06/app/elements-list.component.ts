import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { SiteService } from './site.service'

@Component({
    selector: 'elements-list',
    template: `<h2>Elements </h2>
                <h2>{{errorMessage}}</h2>
{{id}}
 

                <ul class= "items">
                <li (click)= "onSelect(element)" *ngFor = "let element of elements">
                <span class = "badge">
               {{element.elementid}} {{element.elementname}} {{element.category}} {{element.status}}</span>

                </li>
                </ul>`
})

export class ElementsListComponent implements OnInit {
    myModel = [];
    elements = [];
    public siteId;
    sites1 = [];
    validid: boolean;
    errorMessage: string;
    constructor(private _siteService: SiteService, private route: ActivatedRoute, private router: Router) { }

    reloadWithNewId(id: number) {
        this.router.navigate(['/elements', this.siteId]);
    }

   
    ngOnInit() {
        //this.sites = this._siteService.getSites();
 
        this.route.params.subscribe((params: Params) => {
            let id = parseInt(params['id']);
            this.siteId = id;
            var Obj = {
                siteId: this.siteId,

            };
            this._siteService.getElementsList(Obj)
                .subscribe(resElementData => this.elements = resElementData,
                resElementError => this.errorMessage = resElementError);
        })

      
       

    }

    // On selecting the element this method is used to get the corresponding status of the elements 
    onSelect(element) {
       // this.router.navigate(['/details', site.id]);
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