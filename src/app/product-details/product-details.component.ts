import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CartService } from '../cart.service';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  // Inject the cart service by adding it to the constructor()
  constructor(private route: ActivatedRoute, private cartService: CartService) {
    /**
     * ActivatedRoute :
     * is specific to each component that the Angular Router loads.
     * contains information about the route and the route's parameters.
     * by injecting it, we are configuring the component to use a service
     */
  }

  /**
   * extract the productId from the route parameters
   * find the corresponding product in the products array.
   */
  ngOnInit() {
    /**
     * To access the route parameters, we use route.snapshot
     * ActivatedRouteSnapshot that contains information about the active route at that particular moment in time.
     */
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }

  // Takes the current product as an argument
  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
