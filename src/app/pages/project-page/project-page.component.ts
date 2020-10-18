import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ProjectPageService } from './project-page.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {
  id: string;
  project: any;

  constructor(
    private service: ProjectPageService,
    private titleService: Title,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}
  public transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.service.getProject(params.get('id')).subscribe(c => {
        this.project = c;
        this.project.video += '?autoplay=1&mute=0';

      });
    });

    this.setTitle('Portfolio JACMS - ');
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle(newTitle);
  }


}
