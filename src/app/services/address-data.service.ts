import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {IAddress} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class AddressDataService {
  private addressSubject = new BehaviorSubject<IAddress>(this._getToggledAddress());
  address$ = this.addressSubject.asObservable();

  toggleAddressAction() {
    this.addressSubject.next(this._getToggledAddress());
  }

  private _getToggledAddress(): IAddress {
    const name = this.addressSubject?.value.name;
    if(!name || name === 'Tannen') {
      return {
        forename: 'Marty',
        name: 'McFly',
        street: '9303 Roslyndale Ave',
        city: 'Pacoima',
        state: 'CA',
        zip: 91331,
        country: 'USA'
      }
    }

    return {
      forename: 'Biff',
      name: 'Tannen',
      street: '1809 Bushnell Ave',
      city: 'South Pasadena',
      state: 'CA',
      zip: 91030,
      country: 'USA'
    }
  }
}
