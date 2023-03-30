import { Component } from '@angular/core';

export interface Customer {
  name: string;
  email: string;
}

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css'],
})
export class CustomerTableComponent {
  customers: Customer[] = [
    { name: 'John Doe', email: 'john.doe@example.com' },
    { name: 'Jane Doe', email: 'jane.doe@example.com' },
    { name: 'Bob Smith', email: 'bob.smith@example.com' },
  ];
}
