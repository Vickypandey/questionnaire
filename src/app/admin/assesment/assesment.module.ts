import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { AssesmentComponent } from './assesment.component';
import { CategoryComponent } from './category/category.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component'


export const routes = [
  { path: '', component: AssesmentComponent, pathMatch: 'full', data: { breadcrumb: 'Assesment' } },
  { path: 'category', component: CategoryComponent, data: { breadcrumb: 'Category' } },
  { path: 'questionnaire', component: QuestionnaireComponent, data: { breadcrumb: 'Questionnaire' } }
];

@NgModule({
  declarations: [
    AssesmentComponent,
    CategoryComponent,
    QuestionnaireComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ]
})
export class AssesmentModule { }
