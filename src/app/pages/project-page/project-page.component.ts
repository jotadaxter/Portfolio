import { Component, OnInit, ɵConsole } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { ProjectPageService } from './project-page.service';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {
  id: string;
  project: any;
  serviceUrl = 'https://my-json-server.typicode.com/jotadaxter/PortfolioDB/projects/';

  constructor(
    private service: ProjectPageService,
    private titleService: Title,
    private route: ActivatedRoute
  ) {}


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.service.getProject(params.get('id')).subscribe(c => {
        this.project = c;
      });
    });

    this.setTitle('Portfolio JACMS - ');
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
