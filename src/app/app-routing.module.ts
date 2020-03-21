import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './utilities/about/about.component';
import { ProjectsComponent } from './utilities/projects/projects.component';
import { ContactComponent } from './utilities/contact/contact.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';


const routes: Routes = [
  {path: '',   redirectTo: '/about', pathMatch: 'full' },
  {path: 'about', component: AboutPageComponent},
  {path: 'projects', component: ProjectsPageComponent},
  {path: 'contact', component: ContactPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [AboutComponent, ProjectsComponent, ContactComponent];

export const routingPageComponents = [AboutPageComponent, ProjectsPageComponent, ContactPageComponent];

