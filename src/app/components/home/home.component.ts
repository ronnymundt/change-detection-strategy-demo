import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IAddress } from '../../interfaces';
import { MatButton } from '@angular/material/button';
import { PersonAddressComponent } from '../person-address/person-address.component';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    PersonAddressComponent,
    MatButton
  ],
})
export class HomeComponent {
  // PRIVATES
  private _addressSubject = new BehaviorSubject<IAddress>(this._getToggledAddress());

  // PUBLICS
  public address$ = this._addressSubject.asObservable();

  /**
   * Methode toggelt und liefert die Adresse zurück.
   * @returns
   */
  private _getToggledAddress(): IAddress {
    const name = this._addressSubject?.value.name;
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
    } else {
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

  // EVENTS

  /**
   * Klick Event zum ändern der Adresse.
   */
  onToggleAddressClick(): void {
    this._addressSubject.next(this._getToggledAddress());
  }
}
