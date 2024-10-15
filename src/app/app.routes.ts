import { Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    { 
        path: '', 
        component: AboutComponent 
    },
    {
        path: 'resume',
        loadComponent: () => import('./components/resume/resume.component').then(m => m.ResumeComponent)
    },
    {
        path: 'portfolio',
        loadComponent: () => import('./components/portfolio/portfolio.component').then(m => m.PortfolioComponent)
    },
    {
        path: 'blog',
        loadComponent: () => import('./components/blog/blog.component').then(m => m.BlogComponent)
    }
];