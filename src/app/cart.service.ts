import { Injectable } from '@angular/core';
// fetch data from external APIs and provide them to your application as a stream.
import { HttpClient } from '@angular/common/http';

import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // Injectto use
  constructor(private http: HttpClient) {}

  items: Array<Product> = [];

  addToCart(product: Product) {
    this.items = [...this.items, product];
  }

  getCart() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShipingPrice() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }
}
