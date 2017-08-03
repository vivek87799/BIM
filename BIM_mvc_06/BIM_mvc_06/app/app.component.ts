import { Component } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { SiteService } from './site.service';
@Component({
  selector: 'my-app',
  template: `
<div><login-comp  [hidden]="loginShown"></login-comp></div>
<div><site-list  [hidden]="siteListShown"></site-list></div>
`,

  providers: [SiteService]

})
export class AppComponent  {
    name = 'BIM';
    loginShown: boolean = false;
    siteListShown: boolean = true;
}
