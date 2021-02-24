import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OuterContainerStateModule } from './outer-container-state/outer-container-state.module';
import { OuterContainerComponent } from './outer-container/outer-container.component';
import { OtherContainersModule } from './other-containers/other-containers.module';

@NgModule({
  imports: [CommonModule, OuterContainerStateModule, OtherContainersModule],
  declarations: [OuterContainerComponent],
  exports: [OuterContainerComponent, OtherContainersModule],
})
export class InjectorsDemoFeatureProvidersTestModule {}
