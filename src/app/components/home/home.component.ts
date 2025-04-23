import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { IAddress } from '../../interfaces';
import { PersonAddressComponent } from '../person-address/person-address.component';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [PersonAddressComponent, MatButton, JsonPipe, MatCardModule],
})
export class HomeComponent {
  address: IAddress = {
    forename: 'Marty',
    name: 'McFly',
  };

  private getAddress(): IAddress {
    return {
      forename: this.address.forename === 'Marty' ? 'Biff' : 'Marty',
      name: this.address.name === 'McFly' ? 'Tannen' : 'McFly',
    };
  }

  /**
   * Methode weiss eine neue Referenz zu der Adresse zu
   */
  onNewReferenceClick() {
    this.address = this.getAddress();
  }

  /**
   * Methode ändert die Werte der Referenz der Adresse
   */
  onChangeReferenceClick() {
    this.address.forename = this.getAddress().forename;
    this.address.name = this.getAddress().name;
  }
}
