import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../auth.service';

/**
 * 可以在这个路由守卫中添加是否认证的过滤判断
 */
@Injectable()
export class ActivateService implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router) {
  }
  /**
   * 在此做路由认证的判断
   * 将正在尝试访问管理组件匿名用户重定向到登录页
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {boolean | Observable<boolean> | Promise<boolean>}
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    console.log('ActivatedRouteSnapshot:' + route);
    console.log('RouterStateSnapshot:' + state);
    return this.checkLogin(state.url);
  }
  /**
   * 检查是否登录
   * @param {string} url
   */
  checkLogin(url: string) {
    if (this.authService.isLoggedIn) {
      return true;
    } else {
      // 存储将要访问的地址，待登录之后，直接跳入改地址
      this.authService.redirectUrl = url;
      // 跳转到登录页面
      this.router.navigate(['/login']);
      return false;
    }
  }
}
