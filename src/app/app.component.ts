import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Product } from './models/product';

interface SelectItem {
  label: string,
  value: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  products: Product[];

  sortOptions: SelectItem[];

  sortOrder: number;

  sortField: string;

  p = '../assets/demo/products.json';

  result: any[];

  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.getProducts();
    // this.getProducts().then(data => this.products = data);

    // this.sortOptions = [
    //     {label: 'Price High to Low', value: '!price'},
    //     {label: 'Price Low to High', value: 'price'}
    // ];
  }

  getProducts() {
    this.http.get<any>(this.p).subscribe(response => {
      this.result = response;
      console.log(this.result);
    });
  }
  
  onSortChange(event) {
      let value = event.value;

      if (value.indexOf('!') === 0) {
          this.sortOrder = -1;
          this.sortField = value.substring(1, value.length);
      }
      else {
          this.sortOrder = 1;
          this.sortField = value;
      }
  }
}
