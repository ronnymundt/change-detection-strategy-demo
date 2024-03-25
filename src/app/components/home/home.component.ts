import {AsyncPipe} from "@angular/common";
import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import {AddressDataService} from "../../services";
import { PersonAddressComponent } from '../person-address/person-address.component';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    PersonAddressComponent,
    MatButton,
    AsyncPipe
  ],
})
export class HomeComponent {
  public address$ = this.addressService.address$;

  constructor(private readonly addressService: AddressDataService) { }

  // EVENTS

  onToggleAddressClick(): void {
    this.addressService.toggleAddressAction();
  }
}
