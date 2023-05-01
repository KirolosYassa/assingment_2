import { Component } from '@angular/core';
import customers from './_files/customers.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'assingment_2';
  addingCustomer = false;
  customersList: {
    img: string;
    first_name: string;
    last_name: string;
    address: string;
    city: string;
    state: string;
    order_total: Float32Array;
  }[] = customers;

  add_customer_button = () => {
    if (this.addingCustomer) {
      this.addingCustomer = false;
      return;
    }
    this.addingCustomer = true;
  };

  handleAddingNewCustomer = () => {
    
  }
  // handleClick = () => {
  //   console.log('Enter handleClick');

  //   var new_customer = {
  //     img: 'profile.png',
  //     first_name: 'Ahmad',
  //     last_name: 'Aladdin',
  //     address: '234 efds st.',
  //     city: 'Aalyobya',
  //     state: 'dsf sdf',
  //     order_total: 1235.14,
  //   };
  //   customers.push(new_customer);
  //   console.log('Customer Added');
  // };
}
