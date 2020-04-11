import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsPageService {
  serviceUrl: string;

  constructor(private http: HttpClient) {
    this.serviceUrl = 'https://my-json-server.typicode.com/jotadaxter/PortfolioDB/projects';
  }

  getProjects() {
    return this.http.get(this.serviceUrl);
  }
}
