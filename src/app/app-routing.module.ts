import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: () => import(`./content/content.module`).then(m => m.ContentModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppRoutingModule { }
