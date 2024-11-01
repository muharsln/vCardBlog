import { Component, OnInit, Renderer2 } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Meta } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TranslateModule, RouterOutlet, SidebarComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(
    private translate: TranslateService,
    private router: Router,
    private metaService: Meta,
    private renderer: Renderer2
  ) {
    const supportedLanguages = ['en', 'tr'];

    // Tarayıcı dilini alırken undefined olma durumunu kontrol edin
    const browserLang = this.translate.getBrowserLang();
    const defaultLang = browserLang && supportedLanguages.includes(browserLang) ? browserLang : 'en';

    // Varsayılan dili ayarla
    this.translate.setDefaultLang(defaultLang);
    this.translate.use(defaultLang);

    // Tarayıcı diline göre <html> etiketinin lang özniteliğini ayarla
    this.renderer.setAttribute(document.documentElement, 'lang', defaultLang);
  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const currentRoute = this.router.routerState.snapshot.root.firstChild;
        const canonicalURL = `https://muhammedarslan.net${this.router.url}`;
        this.updateCanonicalURL(canonicalURL);

        if (currentRoute && currentRoute.data) {
          this.updateMetaTags(currentRoute.data);
        }
      });
  }
  // Meta etiketler içerisinde yer alan ve seo açısından önemli olan canonical'ın linkini açılan sayfaya göre günceller
  updateCanonicalURL(url: string) {
    const existingCanonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (existingCanonical) {
      // Eğer mevcut bir canonical varsa, sadece href değerini güncelle
      existingCanonical.href = url;
    } else {
      // Eğer mevcut değilse, yeni bir canonical etiketi oluştur
      const link: HTMLLinkElement = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', url);
      document.head.appendChild(link);
    }
  }

  // Meta etiketlerinden description tagını generic olarak günceller
  updateMetaTags(data: any) {
    this.metaService.updateTag({ name: 'description', content: data.description });
  }

}
