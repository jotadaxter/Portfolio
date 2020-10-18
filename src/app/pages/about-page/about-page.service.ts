import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AboutPageService {

  serviceUrl = 'https://my-json-server.typicode.com/jotadaxter/PortfolioDB/skills/';

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute) {}

  getSkills() {
    return this.http.get(this.serviceUrl);
  }
}
