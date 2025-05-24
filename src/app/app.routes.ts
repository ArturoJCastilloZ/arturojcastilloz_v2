import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        loadComponent: () => import('../app/pages/hero/hero.component').then(m => m.HeroComponent)
    },
    {
        path: 'about',
        loadComponent: () => import('../app/pages/about/about.component').then(m => m.AboutComponent)
    },
    {
        path: 'studies',
        loadComponent: () => import('../app/pages/studies/studies.component').then(m => m.StudiesComponent)
    },
    {
        path: 'jobs',
        loadComponent: () => import('../app/pages/jobs/jobs.component').then(m => m.JobsComponent)
    },
    {
        path: 'skills',
        loadComponent: () => import('../app/pages/skills/skills.component').then(m => m.SkillsComponent)
    },
];