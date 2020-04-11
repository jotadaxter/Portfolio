import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from 'src/app/utilities/datasets/project';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProjectPageService {
  serviceUrl = 'https://my-json-server.typicode.com/jotadaxter/PortfolioDB/projects/';
  id: string;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute) {}

  getProject(id: string) {
    return this.http.get(this.serviceUrl + id);
  }
}
