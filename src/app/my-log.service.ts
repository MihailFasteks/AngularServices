import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyLogService {

  private products: string[] = ['Product 1', 'Product 2', 'Product 3', 'Product 4'];

  constructor() { }

  getProducts(): string[] {
    return this.products;
  }
}
