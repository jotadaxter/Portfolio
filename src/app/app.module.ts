import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './utilities/header/header.component';
import { NavbarComponent } from './utilities/navbar/navbar.component';
import { FooterComponent } from './utilities/footer/footer.component';
import { NavbarMobileComponent } from './utilities/navbar-mobile/navbar-mobile.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectPageComponent } from './pages/project-page/project-page.component'
import { HttpClientModule } from '@angular/common/http';
import { ImageModalComponent } from './utilities/image-modal/image-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    NavbarMobileComponent,
    ProjectPageComponent,
    ImageModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
