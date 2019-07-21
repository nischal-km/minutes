import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { EventCardComponent } from './eventcard/eventcard.component';
import { EventService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    EventCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
