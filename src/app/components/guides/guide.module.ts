import { NgModule } from '@angular/core';
import {ShareModule} from '../../app-assets/share.module';
import {GuideRoutingModule} from './guide-routing.module';
import {ActivateGuideComponent} from './activate-guide/activate-guide.component';
import {HttpclientGuideComponent} from './httpclient-guide/httpclient-guide.component';

@NgModule({
  imports: [
    ShareModule,
    GuideRoutingModule
  ],
  declarations: [
    ActivateGuideComponent,
    HttpclientGuideComponent
  ]
})
export class GuideModule { }
