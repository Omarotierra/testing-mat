import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MediaComponent } from './media/media.component';
import { StdevComponent } from './stdev/stdev.component';
import { LinearRegressionComponent } from './linear-regression/linear-regression.component';
import { CorrelationComponent } from './correlation/correlation.component';
import { SimpsonComponent } from './simpson/simpson.component';
import { TComponent } from './t/t.component';

@NgModule({
  declarations: [
    AppComponent,
    MediaComponent,
    StdevComponent,
    LinearRegressionComponent,
    CorrelationComponent,
    SimpsonComponent,
    TComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




