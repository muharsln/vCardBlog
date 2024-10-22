import { Component, OnInit } from '@angular/core';
import { RespositoriesService } from '../../services/respositories.service';
import { Repository } from '../../entities/repository';
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
  repositories: Repository[] = [];

  constructor(
    private repositoriesService: RespositoriesService,
    private titleService: Title,
    private translate: TranslateService) { }

  ngOnInit() {
    this.translate.get("PORTFOLIO").subscribe((translation: string) => {
      this.titleService.setTitle(`Muhammed Arslan | ${translation}`);
    });
    this.repositoriesService.getRepositories().subscribe(data => {
      this.repositories = data;
    });
  }

}
