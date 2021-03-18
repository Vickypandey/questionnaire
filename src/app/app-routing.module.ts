import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PagesComponent } from './pages/pages.component'

const routes: Routes = [
  {
    path: '',
    component: PagesComponent, children: [
      //{ path: '', redirectTo: '/landing', pathMatch: 'full' },
      { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
      { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
      { path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule) },
      { path: 'personal-detail', loadChildren: () => import('./pages/personal-detail/personal-detail.module').then(m => m.PersonalDetailModule) },

    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
