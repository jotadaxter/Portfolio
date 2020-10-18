import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AboutPageService } from './about-page.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {
  skills: any;
  education: any;
  experience: any;

  constructor(
    private service: AboutPageService,
    private titleService: Title,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.service.getSkills().subscribe(c => {
        this.skills = c;
      });
      this.service.getEducation().subscribe(c => {
        this.education = c;
      });
      this.service.getExperience().subscribe(c => {
        this.experience = c;
      });
    });

    this.setTitle('Portfolio JACMS - About');
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
