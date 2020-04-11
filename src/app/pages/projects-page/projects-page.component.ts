import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { ProjectsPageService } from './projects-page.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {
  projects: any;

  constructor(
    private titleService: Title,
    private service: ProjectsPageService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.service.getProjects().subscribe(c => {
        this.projects = c;
      });
    });

    this.setTitle('Portfolio JACMS - Projects');
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

}
