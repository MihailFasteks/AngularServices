import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Task3Service {
  
    private products = [
      { id: 1, name: 'product 1', price: 110, description: 'product 1 text description' },
      { id: 2, name: 'product 2', price: 120, description: 'product 2 text description' },
      { id: 3, name: 'product 3', price: 130, description: 'product 3 text description' }
    ];
  
    getProducts() {
      return this.products;
    }
  
    sortAsc() {
    return this.products.sort((a, b) => a.price - b.price);
    }
    sortDes() {
      return this.products.sort((a, b) => b.price - a.price);
     }
     getMaxPriceProduct() {
      return this.products.reduce((prev, current) => (prev.price > current.price) ? prev : current);
    }
 
}
