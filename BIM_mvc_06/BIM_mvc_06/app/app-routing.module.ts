import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteListComponent } from './site-list.component';
import { SiteDetailsComponent } from './site-details.component';


const routes: Routes = [
    { path: 'list', component: SiteListComponent },
    { path: 'details', component: SiteDetailsComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule]
})

export class AppRoutingModule{ }
export const routingComponents = [SiteListComponent, SiteDetailsComponent]