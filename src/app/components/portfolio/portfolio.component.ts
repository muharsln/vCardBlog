import { Component, OnInit } from '@angular/core';
import { Project } from '../../entities/project';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {
  projects: Project[] = [];

  constructor(
    private titleService: Title,
    private translate: TranslateService) { }

  ngOnInit() {
    this.translate.get("PORTFOLIO").subscribe((translation: string) => {
      this.titleService.setTitle(`Muhammed Arslan | ${translation}`);
    });

    this.projects = [
      {
        name: 'FINEASE',
        url: 'https://finease.app',
        imageUrl: '/assets/images/finease_logo_square.png',
        imageAlt: 'Finease Logo'
      }
    ];

  }

}
