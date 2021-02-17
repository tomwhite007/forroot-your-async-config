import { Component } from '@angular/core';
import { OuterContainerStateService } from '../../outer-container-state/outer-container-state.service';

@Component({
  selector: 'injectors-demo-sub-container1',
  templateUrl: './sub-container1.component.html',
  styleUrls: ['./sub-container1.component.scss'],
})
export class SubContainer1Component {
  constructor(public stateService: OuterContainerStateService) {}
}
