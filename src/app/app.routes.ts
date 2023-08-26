import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'admin',
    loadComponent: () => import('./admin/admin.page').then( m => m.AdminPage)
  },
  {
    path: 'users',
    loadComponent: () => import('./users/users.page').then( m => m.UsersPage)
  },
  {
    path: 'models',
    loadComponent: () => import('./models/models.page').then( m => m.ModelsPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
];
