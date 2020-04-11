import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { ProjectsPageService } from './projects-page.service';
import { Project } from 'src/app/utilities/datasets/project';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {
  projects: Observable<Project>;

  constructor(
    private titleService: Title,
    private projectsPageService: ProjectsPageService) {}

  ngOnInit(): void {
    this.projectsPageService.getProjects()
    .subscribe(projects => this.projects = projects);

    this.setTitle('Portfolio JACMS - Projects');
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

}
