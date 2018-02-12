import { Injectable } from '@angular/core';

import { Product } from '../product.entities';

@Injectable()
export class ProductService {
  private products: Product[];

  constructor() { 
    this.products = [
      { id: 'p01', name: 'name 1', price: 100, photo:'shoe.png' },
      { id: 'p02', name: 'name 2', price: 150, photo:'banana.png' },
      //{ id: 'p03', name: 'name 3', price: 200, photo:'mountains.jpg' },
      //{ id: 'p04', name: 'name 4', price: 250, photo:'nature.jpg' },
      //{ id: 'p05', name: 'name 5', price: 300, photo:'wide.jpg' }
    ];
  }

  findAll(): Product[] {
    return this.products;
  }

  find(id: string): Product {
    return this.products[this.getSelectedIndex(id)];
  }

  private getSelectedIndex(id: string) {
    for (var i = 0; i < this.products.length; i++) {
      if(this.products[i].id == id){
        return i;
      }
    }
    return -1;
  }

}
