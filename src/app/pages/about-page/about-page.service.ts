import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AboutPageService {

  skillsUrl = 'https://my-json-server.typicode.com/jotadaxter/PortfolioDB/skills/';
  educationUrl = 'https://my-json-server.typicode.com/jotadaxter/PortfolioDB/education/';
  experienceUrl = 'https://my-json-server.typicode.com/jotadaxter/PortfolioDB/experience/';

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute) {}

  getSkills() {
    return this.http.get(this.skillsUrl);
  }

  getEducation() {
    return this.http.get(this.educationUrl);
  }

  getExperience() {
    return this.http.get(this.experienceUrl);
  }
}
