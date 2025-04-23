import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { IAddress } from '../../interfaces';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'person-address',
  templateUrl: './person-address.component.html',
  styleUrls: ['./person-address.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush, // Component akzeptiert keine Änderung an der Referenz
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class PersonAddressComponent {
  @Input() set address(address: IAddress | null) {
    if (!address) {
      return;
    }
    this.addressForm.patchValue(address);
  }
  get address(): IAddress | null {
    return this.addressForm.value;
  }

  addressForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  private initForm() {
    this.addressForm = this.fb.group({
      forename: [],
      name: [],
    });
  }
}
