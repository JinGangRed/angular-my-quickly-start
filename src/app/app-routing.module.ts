import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomePageComponent} from './app-assets/welcome-page/welcome-page.component';
import {PageNotFoundComponent} from './app-assets/page-not-found/page-not-found.component';

// 跟路由
const root_routes: Routes = [
  // 默认加载欢迎页
  {
    path: '',
    component: WelcomePageComponent
  },
  // 这里存放子路由和特性路由
  {
    path: 'first',
    loadChildren: './first-demo/first-demo.module#FirstDemoModule'
  },
  // 若路由找不到，则访问该路由
  {
    path: '**',
    component: PageNotFoundComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(
      root_routes,
    // {enableTracing : true} // 查看路由生命周期都做了什么事
    ),
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
