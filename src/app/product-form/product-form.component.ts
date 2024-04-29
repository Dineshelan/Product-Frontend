import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {
  p: product = new product();

  constructor(private productService: ProductService) { }

  post() {
    this.productService.saveData(this.p).subscribe(response => {
      console.log('Saved:', response);
      this.p = new product();
    });
  }
  
}
