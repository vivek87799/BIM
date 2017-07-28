import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SiteListComponent } from './site-list.component';
import { SiteDetailsComponent } from './site-details.component';

@NgModule({
    imports: [BrowserModule, HttpModule, AppRoutingModule],
    declarations: [AppComponent, SiteListComponent, SiteDetailsComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
