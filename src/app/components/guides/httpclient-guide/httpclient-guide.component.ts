import { Component, OnInit } from '@angular/core';
import {BaseFirstDemoService} from '../../../services/base-first-demo.service';

@Component({
  selector: 'app-httpclient-guide',
  templateUrl: './httpclient-guide.component.html',
  styleUrls: ['./httpclient-guide.component.css']
})
export class HttpclientGuideComponent implements OnInit {

  constructor(private baseServiceDemo: BaseFirstDemoService) { }

  ngOnInit() {
    this.baseServiceDemo.getMethodDemo();
  }

}
