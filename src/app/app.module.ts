import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './layout/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataModule } from './data/data.module';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { HomeComponent } from './modules/pages/home/home.component';
import { AboutComponent } from './modules/pages/about/about.component';

@NgModule({
  declarations: [AppComponent, PhotoListComponent, HomeComponent, AboutComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, NgbModule, DataModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
