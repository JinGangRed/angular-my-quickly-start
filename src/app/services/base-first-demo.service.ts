import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class BaseFirstDemoService {

  constructor(private http: HttpClient) {
    console.log('BaserFirstDemo had Injected');
  }
  getMethodDemo() {
    this.http.get('http://www.baidu.com').subscribe(
      data => {
        console.log('获得到百度信息');
        console.log(data);
      },
      err => {
        console.log('发生了错误');
        console.log(err);
      }
    );
  }

}
