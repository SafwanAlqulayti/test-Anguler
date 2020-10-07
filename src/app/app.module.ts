import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HeaderComponent } from './header/header.component';
import { PartnersComponent } from './partners/partners.component';
 import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdCarouselBasic } from './ngbd-carousel-basic/ngbd-carousel-basic.component';
import { CardsComponent } from './cards/cards.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HeaderComponent,
    PartnersComponent,
    NgbdCarouselBasic,
    CardsComponent,
    FooterComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot() ,
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
