import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './components/server/server.component';
import { WarningalertComponent } from './components/warningalert/warningalert.component';
import { SuccessalertComponent } from './components/successalert/successalert.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    WarningalertComponent,
    SuccessalertComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
