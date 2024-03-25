import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { IAddress } from '../../interfaces';
import { MatInput } from '@angular/material/input';
import { MatFormField, MatLabel } from '@angular/material/form-field';

@Component({
  selector: 'person-address',
  templateUrl: './person-address.component.html',
  styleUrls: ['./person-address.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush, // Component akzeptiert keine Änderung einzelner Properties vom address$-Objekt.
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    MatInput
  ]
})
export class PersonAddressComponent implements OnInit {
  //
  @Input() address$: Observable<IAddress> = new Observable<IAddress>();

  //
  addressForm: FormGroup = new FormGroup({});

  constructor(
    private _fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this._initFormGroup();
    this._initSubscriber();
  }

  /**
  * methode initialisiert, die form gruppe
  */
  private _initFormGroup(): void {
    this.addressForm = this._fb.group({
      forename: [{value: '', disabled: true}],
      name: [{value: '', disabled: true}],
      street: [{value: '', disabled: true}],
      zip: [{value: '', disabled: true}],
      city: [{value: '', disabled: true}],
      country: [{value: '', disabled: true}],
      state: [{value: '', disabled: true}],
    });
  }

  /**
  * Methode initialisiert die Subscriber.
  */
  private _initSubscriber(): void {
    this.address$.subscribe((values: IAddress) => this.addressForm.patchValue(values));
  }
}
