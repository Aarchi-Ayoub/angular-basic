/**
 * A- Sharing data between child and parent :
 *  Input ==> Parent to child
 *  Output => CHild to parent
 * B- EventEmitter (using with Output directive) : to emit custom events synchronously or asynchronously
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

// Indicates that the following class is a component
@Component({
  // Metadata about the component
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent {
  // Indicates that the property value passes in from the component's parent
  @Input() product!: Product;

  // allows the component to emit an event when the value of the notify property changes.
  @Output() notify = new EventEmitter();
}
