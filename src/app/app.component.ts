import { Component } from '@angular/core';
import { HomeComponent } from './components';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [HomeComponent]
})
export class AppComponent { }
