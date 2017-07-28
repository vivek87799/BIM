import { Component } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { SiteService } from './site.service';
@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
                <nav>
                <a routerLink = "/list" routerLinkActive = "active">List</a>
                <a routerLink = "/details" routerLinkActive = "active">Details</a>
                </nav> 
                <router-outlet></router-outlet>
              `,
  providers: [SiteService]

})
export class AppComponent  { name = 'Angular'; }
