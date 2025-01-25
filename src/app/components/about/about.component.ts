import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  skills: string[] = [
    "C#", "Angular", "Docker",
    "MsSql", "TypeScript", "Jenkins",
    "Onion Architecture", "Clean Code",
    "CQRS Pattern", "OOP"
  ];

  companies = [
    {
      name: '7 Kıta Organizasyon', 
      logo: './assets/images/companies/7kita.png', 
      url: 'https://7kitaorg.com'
    },
    { 
      name: 'For Muslim Media', 
      logo: './assets/images/companies/dfm.png', 
      url: 'https://formuslimedia.com'
    }
  ];

  constructor(
    private titleService: Title,
    private translate: TranslateService) { }

  ngOnInit() {
    this.translate.get("ABOUT").subscribe((translation: string) => {
      this.titleService.setTitle(`Muhammed Arslan | ${translation}`);
    });
  }
}