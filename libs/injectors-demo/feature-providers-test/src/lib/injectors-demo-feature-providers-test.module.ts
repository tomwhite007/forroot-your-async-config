import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OuterContainerStateModule } from './outer-container-state/outer-container-state.module';
import { SubContainersModule } from './sub-containers/sub-containers.module';
import { OuterContainerComponent } from './outer-container/outer-container.component';

@NgModule({
  imports: [CommonModule, OuterContainerStateModule, SubContainersModule],
  declarations: [OuterContainerComponent],
  exports: [OuterContainerComponent, SubContainersModule],
})
export class InjectorsDemoFeatureProvidersTestModule {}
