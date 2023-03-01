// OnInit ==> A lifecycle hook that is called after Angular has initialized all data-bound properties of a directive
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent implements OnInit {
  // property that sets the value using the method from the CartService
  shippingCosts!: Observable<{ type: string; price: number }[]>;

  // Inject the cart service
  constructor(private cartService: CartService) {}
  /**
   * A callback method that is invoked immediately after
   * the default change detector has checked the directive
   * 's data-bound properties for the first time, and before
   * any of the view or content children have been checked.
   * It is invoked only once when the directive is instantiated.
   */
  ngOnInit(): void {
    // Initialize the property
    this.shippingCosts = this.cartService.getShipingPrice();
  }
}
