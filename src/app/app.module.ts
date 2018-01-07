import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CoreModule} from './app-assets/core.module';
import {ShareModule} from './app-assets/share.module';
import {AppRoutingModule} from './app-routing.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {BaseHttpInterceptorService} from './services/base-http-interceptor.service';
import {BaseFirstDemoService} from './services/base-first-demo.service';
@NgModule({
  declarations: [
    AppComponent,
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
