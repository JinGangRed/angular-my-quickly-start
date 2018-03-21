import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CoreModule} from './app-assets/core.module';
import {ShareModule} from './app-assets/share.module';
import {AppRoutingModule} from './app-routing.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {BaseHttpInterceptorService} from './services/base-http-interceptor.service';
import {BaseFirstDemoService} from './services/base-first-demo.service';
import {LoginComponent} from './components/login/login.component';
import {AuthService} from './services/auth.service';
import {ActivateService} from './services/route-guard/activate.service';
import { ActivateGuideComponent } from './components/guides/activate-guide/activate-guide.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    CoreModule,
    ShareModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseHttpInterceptorService,
      multi: true
    },
    BaseFirstDemoService,
    AuthService,
    ActivateService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
