import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnasTestCompComponent } from './Anas/anas-test-comp/anas-test-comp.component';
import { HalaTestCompComponent } from './Hala/hala-test-comp/hala-test-comp.component';
import { JanaTestCompComponent } from './Jana/jana-test-comp/jana-test-comp.component';
import { MohammadTestCompComponent } from './Mohammad/mohammad-test-comp/mohammad-test-comp.component';
import { OmarTestCompComponent } from './Omar/omar-test-comp/omar-test-comp.component';
import { RahafTestCompComponent } from './Rahaf/rahaf-test-comp/rahaf-test-comp.component';
import { TuqaTestCompComponent } from './Tuqa/tuqa-test-comp/tuqa-test-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    AnasTestCompComponent,
    HalaTestCompComponent,
    JanaTestCompComponent,
    MohammadTestCompComponent,
    OmarTestCompComponent,
    RahafTestCompComponent,
    TuqaTestCompComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
