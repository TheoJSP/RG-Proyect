import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app.component';
import { HomeComponent } from './components/home/home.component';
import { HomeFooterComponent } from './components/home/footer/home-footer.component';
import { HomeHeaderComponent } from './components/home/header/home-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeFooterComponent,
    HomeHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
