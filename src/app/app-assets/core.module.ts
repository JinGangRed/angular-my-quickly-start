import {NgModule, Optional, SkipSelf} from '@angular/core';
import {WelcomePageComponent} from './welcome-page/welcome-page.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ShareModule} from './share.module';
import {BrowserModule} from '@angular/platform-browser';

/**
 * 核心模块，只需要使用一次
 */
@NgModule({
  imports: [
    ShareModule,
    BrowserModule,
  ],
  exports: [
    BrowserModule,
    WelcomePageComponent,
    PageNotFoundComponent,
  ],
  declarations: [
    WelcomePageComponent,
    PageNotFoundComponent
  ]
})
export class CoreModule {
  /**
   * 避免核心模块被多次加载
   * @param {CoreModule} parentModule
   */
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule had been loaded. Import it in AppModule Only');
    }
  }
}
