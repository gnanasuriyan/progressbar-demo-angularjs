import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import {ProgressbarService} from './services/progressbar.service';

@NgModule({
  declarations: [
    AppComponent,
    ProgressbarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [ProgressbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
