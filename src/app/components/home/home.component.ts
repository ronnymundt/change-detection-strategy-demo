import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IAddress } from '../../interfaces/address.interface';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // PRIVATES
  private _addressSubject = new BehaviorSubject<IAddress>(this._getToggledAddress()); 

  // PUBLICS
  public address$ = this._addressSubject.asObservable();

  constructor() { }

  ngOnInit(): void { }   

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
  public onToggleAddressClick(): void {
    this._addressSubject.next(this._getToggledAddress());
  }
}
