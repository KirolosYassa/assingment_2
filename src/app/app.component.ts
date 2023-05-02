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
    order_total: number;
  }[] = customers;
  customizedCustomersList: {
    img: string;
    first_name: string;
    last_name: string;
    address: string;
    city: string;
    state: string;
    order_total: number;
  }[] = customers;

  first_name: string = '';
  last_name: string = '';
  address: string = '';
  city: string = '';
  state: string = '';
  order_total: number = 0;

  searchText: string = '';
  searchResult: boolean = false;

  handleSearch = () => {
    let searchText = (<HTMLInputElement>document.getElementById('search'))
      .value;
    searchText = searchText;
    console.log(`searchText = ${searchText}`);
    let str = 'Mina';
    let subStr = 'Min';

    // if (str.includes(subStr)) console.log(`${subStr} is in ${str}`);
    // else console.log('min is not in Mina');

    // if (searchText == '' || searchText == ' ') this.searchResult == false;
    // else {
    // for (let customer of this.customersList) {
    //   if (
    //     customer.first_name.includes(searchText) ||
    //     customer.last_name.includes(searchText) ||
    //     customer.address.includes(searchText) ||
    //     customer.city.includes(searchText) ||
    //     customer.state.includes(searchText) ||
    //     String(customer.order_total).includes(searchText)
    //   ) {
    //     this.customizedCustomersList.push({
    //       img: 'profile.png',
    //       first_name: customer.first_name,
    //       last_name: customer.last_name,
    //       address: customer.address,
    //       city: customer.city,
    //       state: customer.state,
    //       order_total: customer.order_total,
    //     });
    //   }
    // }

    //   this.searchResult = true;
    // }
  };
  add_customer_button = () => {
    if (this.addingCustomer) {
      this.addingCustomer = false;
      return;
    }
    this.addingCustomer = true;
  };

  handleAddingNewCustomer = () => {
    let first_name = (<HTMLInputElement>document.getElementById('first_name'))
      .value;
    console.log(`first_name = ${first_name}`);
    let last_name = (<HTMLInputElement>document.getElementById('last_name'))
      .value;
    console.log(`last_name = ${last_name}`);
    let address = (<HTMLInputElement>document.getElementById('address')).value;
    console.log(`address = ${address}`);
    let city = (<HTMLInputElement>document.getElementById('city')).value;
    console.log(`city = ${city}`);
    let state = (<HTMLInputElement>document.getElementById('state')).value;
    console.log(`state = ${state}`);
    let order_total = (<HTMLInputElement>document.getElementById('order_total'))
      .value;
    console.log(`order_total = ${order_total}`);

    var new_customer = {
      img: 'profile.png',
      first_name: first_name,
      last_name: last_name,
      address: address,
      city: city,
      state: state,
      order_total: order_total,
    };
    customers.push(new_customer);
    console.log('Customer Added');
  };
}
