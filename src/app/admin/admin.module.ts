import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AdminComponent } from './admin.component';
import { MenuComponent } from './components/menu/menu.component';
import { FullScreenComponent } from './components/fullscreen/fullscreen.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';

export const routes = [
  {
    path: '',
    component: AdminComponent, children: [
      { path: '', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'user-detail', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule), data: { breadcrumb: 'User-Detail' } },
      { path: 'assesment', loadChildren: () => import('./assesment/assesment.module').then(m => m.AssesmentModule) },

    ]
  }
];


@NgModule({
  declarations: [
    AdminComponent,
    MenuComponent,
    FullScreenComponent,
    BreadcrumbComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class AdminModule { }
