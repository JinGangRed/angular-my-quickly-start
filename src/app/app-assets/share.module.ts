import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

/**
 * 共享模块，在项目中多处使用，可以在此定义，在使用的地方直接导入ShareModule即可
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
  ],
  declarations: []
})
export class ShareModule { }
