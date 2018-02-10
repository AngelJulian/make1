import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { MyData } from './my-data';
import { CartService } from './cart.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Your Shopping Cart';

  products: MyData[];

  constructor( private newSrv: CartService){}

  getProducts(): void {
    this.products = this.newSrv.getProducts();
  }

  removeProduct = function(index) {
    this.products.splice(index, 1);
  }
  

  ngOnInit() {
    this.getProducts();
  }
}
