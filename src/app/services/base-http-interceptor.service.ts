import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';

/**
 * HTTP拦截器,设置头部信息
 */
@Injectable()
export class BaseHttpInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
    const req_started = Date.now();
    const access_token = `Bearer token`;
    const authReq = req.clone({
      setHeaders: {
        Authorization: access_token
      }
    });
    return next.handle(authReq).do(event => {
      if ( event instanceof HttpResponse) {
        const elapsed = Date.now() - req_started;
        console.log(`Request for ${req.urlWithParams} took ${elapsed} ms` );
      }
    });
  }

}
