import { Component } from '@angular/core';

@Component({
    selector: 'site-list',
    template: `<h2></h2>
                <ul *ngFor = "let site of sites">
                <li>{{site.name}}</li>
                   </ul>`
})

export class SiteListComponent {
    sites = [
        { "id": 1, "name": "Site1" },
        { "id": 2, "name": "Site2" },
        { "id": 3, "name": "Site3" }
    ]

}