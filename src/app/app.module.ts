import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PagesComponent } from './pages/pages.component'
import { ToolbarComponent } from './pages/menu/toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './pages/footer/footer.component';
import { AppSettings } from './app.settings';
import { PersonalDetailComponent } from './pages/personal-detail/personal-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    ToolbarComponent,
    FooterComponent,
    PersonalDetailComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [AppSettings],
  bootstrap: [AppComponent]
})
export class AppModule { }
