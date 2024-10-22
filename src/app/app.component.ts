import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TranslateModule, RouterOutlet, SidebarComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    const supportedLanguages = ['en', 'tr'];

    // Tarayıcı dilini alırken undefined olma durumunu kontrol edin
    const browserLang = this.translate.getBrowserLang();
    const defaultLang = browserLang && supportedLanguages.includes(browserLang) ? browserLang : 'en';

    // Varsayılan dili ayarla
    this.translate.setDefaultLang(defaultLang);
    this.translate.use(defaultLang);
  }

}
