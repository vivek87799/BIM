import { Component } from '@angular/core';

@Component({
    selector: 'site-details',
    template: `<h2></h2>
                <ul *ngFor = "let site of sites">
                <li>{{site.id}} - {{site.name}}</li>
                   </ul>`
})

export class SiteDetailsComponent {
    sites = [
        { "id": 1, "name": "Site1" },
        { "id": 2, "name": "Site2" },
        { "id": 3, "name": "Site3" }
    ]

}