import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { PlatComponent } from './plat/plat.component';
import {HttpClientModule} from '@angular/common/http';


import {FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPopperModule } from 'ngx-popper';
import { AddPlatComponent } from './add-plat/add-plat.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    PlatComponent,
    AddPlatComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgxPopperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
