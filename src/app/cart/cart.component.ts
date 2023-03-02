import { Component } from "@angular/core";
// provides convenient methods for generating controls.
import { FormBuilder } from "@angular/forms";

import { CartService } from "../cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent {
  items = this.cartService.getCart();

  // Inject the services
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  // To gather the user's name and address
  checkForm = this.formBuilder.group({
    name: "",
    adress: "",
  });

  // Process the form
  onSubmit(): void {
    // Remove items from the list
    this.items = this.cartService.clearCart();

    // Log the current value of inputs
    console.warn("Your order has been submitted", this.checkForm.value);

    // Clear the values
    this.checkForm.reset();
  }
}
