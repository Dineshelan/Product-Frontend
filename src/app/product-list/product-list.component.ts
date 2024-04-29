import { Component } from '@angular/core';
import { product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  p: product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getData().subscribe(data => {
      this.p = data;
    });
  }
}
