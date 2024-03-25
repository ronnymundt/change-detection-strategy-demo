import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { IAddress } from '../../interfaces/address.interface';

@Component({
  selector: 'person-address',
  templateUrl: './person-address.component.html',
  styleUrls: ['./person-address.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush // Component akzeptiert keine Änderung einzelner Properties vom address$-Objekt.
})
export class PersonAddressComponent implements OnInit {
  //
  @Input() address$: Observable<IAddress> = new Observable<IAddress>();

  //
  public addressForm: FormGroup = new FormGroup({});

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
      forename: new FormControl({value: '', disabled: true}),
      name: new FormControl({value: '', disabled: true}),
      street: new FormControl({value: '', disabled: true}),
      zip: new FormControl({value: '', disabled: true}),
      city: new FormControl({value: '', disabled: true}),
      country: new FormControl({value: '', disabled: true}),
      state: new FormControl({value: '', disabled: true}),
    });
  }

  /**
  * Methode initialisiert die Subscriber.
  */
  private _initSubscriber(): void {
    this.address$.subscribe((values: IAddress) => this.addressForm.patchValue(values));
  }
}
