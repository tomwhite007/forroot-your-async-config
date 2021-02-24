import { Component } from '@angular/core';
import { OuterContainerStateService } from '../../outer-container-state/outer-container-state.service';

@Component({
  selector: 'injectors-demo-other-container1',
  templateUrl: './other-container1.component.html',
  styleUrls: ['./other-container1.component.scss'],
})
export class OtherContainer1Component {
  constructor(public stateService: OuterContainerStateService) {}
}
