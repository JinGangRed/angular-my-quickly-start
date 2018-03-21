import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService,
              private router: Router) {
  }
  ngOnInit() {
  }
  login() {
    if (this.authService.login()) {
      if (this.authService.redirectUrl) {
        this.router.navigate([this.authService.redirectUrl]);
      }
    }else {
      alert('您登陆失败');
    }
  }
}
