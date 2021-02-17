import { Injectable } from '@angular/core';
import { OuterContainerStateModule } from './outer-container-state.module';

@Injectable({
  providedIn: OuterContainerStateModule,
})
export class OuterContainerStateService {
  testValue = 0;
}
