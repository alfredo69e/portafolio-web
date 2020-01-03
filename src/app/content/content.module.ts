import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';


const routes: Routes = [
  { path: '', component: CvComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxChartsModule
  ],
  declarations: [
    CvComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]

})
export class ContentModule { }
