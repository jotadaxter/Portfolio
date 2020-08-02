import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';


/*const routes: Routes = [
  {path: '',   redirectTo: '/about', pathMatch: 'full' },
  {path: 'about', component: AboutPageComponent},
  {path: 'projects', component: ProjectsPageComponent},
  {path: 'project/:id', component: ProjectPageComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: 'contacts', component: ContactPageComponent},
  {path: '**',   redirectTo: '/about'},
];*/

const routes: Routes = [
  {path: '',   redirectTo: '/about', pathMatch: 'full' },
  {path: 'about', data: { breadcrumb: 'About'}, component: AboutPageComponent},
  {
    path: 'projects',
    data: {
      breadcrumb: 'Projects'
    },
    children: [
      {path: '', component: ProjectsPageComponent},
      {path: 'project/:id', component: ProjectPageComponent}
    ]
  },
  {path: 'contact', data: { breadcrumb: 'Contact'}, component: ContactPageComponent},
  {path: 'contacts', data: { breadcrumb: 'Contact'}, component: ContactPageComponent},
  {path: '**',   redirectTo: '/about'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [AboutPageComponent, ProjectsPageComponent, ContactPageComponent]
