import { Component } from '@angular/core';
import customers from './_files/customers.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'assingment_2';
  customersList: {
    img: string;
    first_name: string;
    last_name: string;
    address: string;
    city: string;
    state: string;
    order_total: Float32Array;
  }[] = customers;
}
