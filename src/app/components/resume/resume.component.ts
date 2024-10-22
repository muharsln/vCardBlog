import { Component, OnInit } from '@angular/core';
import { CvData } from '../../entities/cv-data';
import { CvDataService } from '../../services/cv-data.service';
import { CommonModule } from '@angular/common';
import { DomSanitizer, Title, SafeHtml } from '@angular/platform-browser';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent implements OnInit {
  cvDatas: CvData = {} as CvData;

  constructor(
    private cvDataService: CvDataService,
    private titleService: Title,
    private translate: TranslateService) { }

  ngOnInit() {
    this.translate.get("RESUME").subscribe((translation: string) => {
      this.titleService.setTitle(`Muhammed Arslan | ${translation}`);
    });
    if (this.translate.currentLang === "tr") {
      this.cvDataService.getCvDatasTr().subscribe(data => {
        this.cvDatas = data;
      });
    }
    else {
      this.cvDataService.getCvDatasEn().subscribe(data => {
        this.cvDatas = data;
      });
    }

  }
}