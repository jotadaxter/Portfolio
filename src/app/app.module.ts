import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents, routingPageComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './utilities/header/header.component';
import { NavbarComponent } from './utilities/navbar/navbar.component';
import { FooterComponent } from './utilities/footer/footer.component';
import { AboutComponent } from './utilities/about/about.component';
import { ContactComponent } from './utilities/contact/contact.component';
import { ProjectsComponent } from './utilities/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    routingPageComponents,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
