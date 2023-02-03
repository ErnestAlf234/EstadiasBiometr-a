import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

// PrimeNg
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { PrincipalModule } from './principal/principal.module';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRouterModule,
    PrincipalModule,
    

  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
