import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GuideComponent} from './guide/guide.component';


const first_demo_routes: Routes = [
  {
    path: '',
    component: GuideComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(first_demo_routes),
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class FirstDemoRoutingModule { }
