import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HomeComponent } from './home/home.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


// translate 
import { TranslateModule } from '@ngx-translate/core';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cv', component: CvComponent },
  { path: 'portafolio', component: PortafolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxChartsModule,
    TranslateModule
  ],
  declarations: [
    CvComponent,
    HomeComponent,
    PortafolioComponent,
    AboutComponent,
    ContactComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]

})
export class ContentModule { }
