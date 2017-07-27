import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
              <site-list></site-list>
                <site-details></site-details>`

})
export class AppComponent  { name = 'Angular'; }
