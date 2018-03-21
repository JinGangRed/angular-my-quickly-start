import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

/**
 * 认证授权的服务类
 */
@Injectable()
export class AuthService {
  isLoggedIn = false; // 是否登陆
  redirectUrl: string; // 登陆后跳转的链接
  constructor() {
  }
  /**
   * 登录
   * @returns {Observable<boolean>}
   */
  login(): Observable<boolean> {
    this.isLoggedIn = true;
    return Observable.of(this.isLoggedIn);
  }
}
