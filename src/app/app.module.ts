import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// PROJECT'S COMPONENTS

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
