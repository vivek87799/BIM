import { Component } from '@angular/core';
import { SiteService } from './site.service';
@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
              <site-list></site-list>
                <site-details></site-details>`,
  providers: [SiteService]

})
export class AppComponent  { name = 'Angular'; }
