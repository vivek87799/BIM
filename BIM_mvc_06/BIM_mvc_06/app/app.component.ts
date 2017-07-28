import { Component } from '@angular/core';
import { SiteService } from './site.service';
@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>

                <nav>
                <a routerlink = "/list" routerLinkActive = "active">List</a>
                <a routerlink = "/details" routerLinkActive = "active">Details</a>
                </nav> 
                <router-outlet></router-outlet>
              `,
  providers: [SiteService]

})
export class AppComponent  { name = 'Angular'; }
