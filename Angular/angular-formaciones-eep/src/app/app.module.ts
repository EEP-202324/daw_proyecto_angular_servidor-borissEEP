import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormacionDetailComponent } from './formacion-detail/formacion-detail.component';
import { FormacionesComponent } from './formaciones/formaciones.component';
import { FormacionSearchComponent } from './formacion-search/formacion-search.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,


  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    FormacionesComponent,
    FormacionDetailComponent,
    FormacionSearchComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
