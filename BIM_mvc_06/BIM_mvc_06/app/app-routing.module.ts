import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteListComponent } from './site-list.component';
import { SiteDetailsComponent } from './site-details.component';
import { LoginComponent } from './login.component';
import { ElementsListComponent } from './elements-list.component';




const routes: Routes = [
    { path: 'list', component: SiteListComponent },
    { path: 'details', component: SiteDetailsComponent },
    { path: 'details/:id', component: SiteDetailsComponent },
    { path: 'elements', component: ElementsListComponent },
    { path: 'elements/:id', component: ElementsListComponent },


];  

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule]
})

export class AppRoutingModule{ }
export const routingComponents = [SiteListComponent, SiteDetailsComponent, LoginComponent, ElementsListComponent]