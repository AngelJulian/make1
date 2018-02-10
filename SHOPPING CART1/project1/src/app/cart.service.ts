import { Injectable } from '@angular/core';
import { MyData } from './my-data';
import { PRODUCTS } from './products';
//import { HttpClient } from '@angular/common/http';

@Injectable()
export class CartService {

 // constructor(private http: HttpClient) { }

  getProducts(): MyData[] {
    return PRODUCTS;
  }


}
