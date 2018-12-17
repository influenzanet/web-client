import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconRegistry } from '@angular/material';
import { SelectedMaterialModules } from './services/material.module';

import { LandingComponent } from './landing/landing.component';

import { HeaderComponent } from './landing/header/header.component';
import { LoginComponent } from './landing/login/login.component';
import { SignupComponent } from './landing/signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './landing/page-not-found/page-not-found.component';
import { InfoPageComponent } from './landing/info-page/info-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    PageNotFoundComponent,
    InfoPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SelectedMaterialModules,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public matIconRegistry: MatIconRegistry) {
    matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }
}
