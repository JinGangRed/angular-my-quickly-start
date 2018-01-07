import { NgModule } from '@angular/core';
import {ShareModule} from '../app-assets/share.module';
import {GuideComponent} from './guide/guide.component';
import {FirstDemoRoutingModule} from './first-demo-routing.module';

@NgModule({
  imports: [
    ShareModule,
    FirstDemoRoutingModule
  ],
  declarations: [
    GuideComponent
  ]
})
export class FirstDemoModule { }
