import { Component, OnInit } from '@angular/core';
import { OuterContainerStateService } from '../outer-container-state/outer-container-state.service';

@Component({
  selector: 'injectors-demo-outer-container',
  templateUrl: './outer-container.component.html',
  styleUrls: ['./outer-container.component.scss'],
})
export class OuterContainerComponent implements OnInit {
  constructor(private localState: OuterContainerStateService) {}

  ngOnInit(): void {
    this.localState.testValue = 99;
  }
}
