import { Component, OnInit } from '@angular/core';
import { RespositoriesService } from '../../services/respositories.service';
import { Repository } from '../../entities/repository';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {
  repositories: Repository[] = [];

  constructor(private repositoriesService: RespositoriesService) { }

  ngOnInit() {
    this.repositoriesService.getRepositories().subscribe(data => {
      this.repositories = data;
    });
  }

}
