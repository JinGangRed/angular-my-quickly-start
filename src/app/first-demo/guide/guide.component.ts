import { Component, OnInit } from '@angular/core';
import {BaseFirstDemoService} from '../../services/base-first-demo.service';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css'],
})
export class GuideComponent implements OnInit {

  constructor(private baseServiceDemo: BaseFirstDemoService) { }

  ngOnInit() {
    this.baseServiceDemo.getMethodDemo();
  }

}
