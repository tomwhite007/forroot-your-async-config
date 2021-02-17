import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubContainer1Component } from './sub-container1/sub-container1.component';

@NgModule({
  declarations: [SubContainer1Component],
  imports: [CommonModule],
  exports: [SubContainer1Component],
})
export class SubContainersModule {}
