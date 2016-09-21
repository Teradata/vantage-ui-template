import { Component } from '@angular/core';

import { StepState, IStepChangeEvent } from '@covalent/core';

@Component({
  selector: 'product-form',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.scss'],
})
export class FormComponent {

  stepChangeMsg: string = 'No change detected yet.';
  activeDeactiveStep1Msg: string = 'No select/deselect detected yet';
  stateStep2: StepState = StepState.Required;
  stateStep3: StepState = StepState.Complete;
  disabled: boolean = false;

  toggleRequiredStep2(): void {
    this.stateStep2 = (this.stateStep2 === StepState.Required ? StepState.None : StepState.Required);
  }

  toggleCompleteStep3(): void {
    this.stateStep3 = (this.stateStep3 === StepState.Complete ? StepState.None : StepState.Complete);
  }

  stepChange(event: IStepChangeEvent): void {
    if (event.prevStep === undefined) {
      this.stepChangeMsg = `Started at step: ${event.newStep}`;
    } else {
      this.stepChangeMsg = `Changed from step: ${event.prevStep} to step: ${event.newStep}`;
    }
  }

  toggleDisabled(): void {
    this.disabled = !this.disabled;
  }

  activeStep1Event(): void {
    this.activeDeactiveStep1Msg = 'Active event emitted.';
  }

  deactiveStep1Event(): void {
    this.activeDeactiveStep1Msg = 'Deactive event emitted.';
  }
}
