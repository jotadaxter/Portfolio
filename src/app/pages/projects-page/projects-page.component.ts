import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {
  projects$: Observable<any> =  this.http.get('https://my-json-server.typicode.com/jotadaxter/Portfolio/projects');

  constructor(private titleService: Title, private http: HttpClient) { }

  ngOnInit(): void {
    this.setTitle('Portfolio JACMS - Projects');
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

}
