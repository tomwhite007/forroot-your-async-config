import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherContainer1Component } from './other-container1/other-container1.component';

@NgModule({
  declarations: [OtherContainer1Component],
  imports: [CommonModule],
  exports: [OtherContainer1Component],
})
export class OtherContainersModule {}
