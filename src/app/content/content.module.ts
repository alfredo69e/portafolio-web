import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CvComponent } from './cv/cv.component';


const routes: Routes = [
  { path: '', component: CvComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    CvComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]

})
export class ContentModule { }
