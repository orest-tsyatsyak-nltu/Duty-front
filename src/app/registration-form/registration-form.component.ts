import { CommonModule } from '@angular/common';
import { Component, Optional } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NgEventBus } from 'ng-event-bus';
import { validatePassword } from './password-validator';
import { getErrorMessage } from '../../shared/validation-errors-getter';
import { Events } from '../../shared/duty-manager-events';

@Component({
  selector: 'registration-form',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.scss',
})
export class RegistrationFormComponent {
  hide = true;
  constructor(
    private eventBus: NgEventBus,
    @Optional() private dialogRef?: MatDialogRef<any>
  ) {}

  registerForm = new FormGroup({
    senderFullName: new FormControl('', [Validators.required]),
    senderEmail: new FormControl('', [Validators.required, Validators.email]),
    senderPassword: new FormControl('', [
      Validators.required,
      validatePassword,
      Validators.minLength(8)
    ]),
  });

  register() {
    if (this.registerForm.valid) {
      this.dialogRef?.close();
      this.eventBus.cast(Events.REGISTER, {
        fullName: this.registerForm.get('senderFullName')?.value,
        email: this.registerForm.get('senderEmail')?.value,
        password: this.registerForm.get('senderPassword')?.value,
      });
    }
  }

  getErrorMessage(formControlName: string) {
    return getErrorMessage(formControlName, this.registerForm);
  }
}
