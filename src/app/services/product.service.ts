import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductResponseModule } from '../modules/productResponseModule';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl="https://localhost:44381/api/products/getall"
  constructor(private httpClient :HttpClient) { }
  getProducts():Observable<ProductResponseModule>{
    return this.httpClient.get<ProductResponseModule>(this.apiUrl);
  }
}  

