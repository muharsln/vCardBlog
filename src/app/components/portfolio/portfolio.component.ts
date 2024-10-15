import { Component, OnInit } from '@angular/core';
import { RespositoriesService } from '../../services/respositories.service';
import { Repository } from '../../entities/repository';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {
  repositories: Repository[] = [];

  constructor(private repositoriesService: RespositoriesService, private titleService:Title) { }

  ngOnInit() {
    this.titleService.setTitle("Muhammed Arslan | Portfolio")
    this.repositoriesService.getRepositories().subscribe(data => {
      this.repositories = data;
    });
  }

}
