import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { AccueilComponent } from './accueil/accueil.component';

import { AppRoutingModule } from './app-routing.module';
import { OneConcoursComponent } from './one-concours/one-concours.component';
import { ListConcoursComponent } from './list-concours/list-concours.component';
import { DetailConcoursComponent } from './detail-concours/detail-concours.component';

@NgModule({
  declarations: [AppComponent, MenuComponent, AccueilComponent, OneConcoursComponent, ListConcoursComponent, DetailConcoursComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
