import {NgModule} from '@angular/core';
import {ShareModule} from '../../app-assets/share.module';
import {RouterModule, Routes} from '@angular/router';
import {ActivateGuideComponent} from './activate-guide/activate-guide.component';
import {ActivateService} from '../../services/route-guard/activate.service';
import {HttpclientGuideComponent} from './httpclient-guide/httpclient-guide.component';

/**
 * 实例路由
 * @type {[{}]}
 */
const guide_route: Routes = [
  {
    path: 'activate',
    component: ActivateGuideComponent,
    canActivate: [ActivateService]
  },
  {
    path: 'http',
    component: HttpclientGuideComponent
  }
];


@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild(guide_route)
  ],
  exports: [
    RouterModule,
  ]
})
export class GuideRoutingModule {
}
