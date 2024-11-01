import { Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: AboutComponent,
        data: {
            description: 'Kişisel sayfamda hakkımda bilgi edinebilir, yaptığım projeleri görebilir ve yazdığım makaleleri okuyabilirsiniz.'
        }
    },
    {
        path: 'resume',
        loadComponent: () => import('./components/resume/resume.component').then(m => m.ResumeComponent),
        data: {
            description: 'Bu sayfada öz geçmişimi görüntüleyebilir, deneyim ve eğitimlerimi inceleyebilirsiniz.'
        }
    },
    {
        path: 'portfolio',
        loadComponent: () => import('./components/portfolio/portfolio.component').then(m => m.PortfolioComponent),
        data: {
            description: 'Bu sayfada yapmış olduğum projeleri görüntüleyebilir, dilerseniz kodlarımı inceleyebilirsiniz.'
        }
    },
    {
        path: 'blog',
        loadComponent: () => import('./components/blog/blog.component').then(m => m.BlogComponent),
        data: {
            description: 'Bu sayfada yazmış olduğum blog yazılarımı görüntüleyip, dilediğinizi okuyabilirsiniz.'
        }
    },
    {
        path: '**',
        component: PageNotFoundComponent,
        data: {
            description: 'Maalesef erişmek istediğiniz sayfa bulunmamaktadır.'
        }
    }
];