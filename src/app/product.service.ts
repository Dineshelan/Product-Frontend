import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  saveData(p: product): Observable<product> {
    return this.http.post<product>("http://localhost:8080/products/post", p);
  }

  getData(): Observable<product[]> {
    return this.http.get<product[]>("http://localhost:8080/products/get");
  }
}
