import { Component, OnInit } from '@angular/core';

import { Product } from '../product.entities';
import { ProductService } from '../services/product.service';


@Component({
  //moduleId: module.id,
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products: Product[];

  constructor(private pdtService: ProductService) { }

  ngOnInit() {
    this.products = this.pdtService.findAll();
  }

}
