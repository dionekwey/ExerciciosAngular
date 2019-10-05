import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/forms/src/facade/async';

@Component({
  selector: 'app-stock-status',
  templateUrl: './stock-status.component.html',
  styleUrls: ['./stock-status.component.css']
})
export class StockStatusComponent {
  @Input() stock: number;
  @Input() productId: number;
  //@Output() stockValueChange: new EventEmitter();
  color = '';
  updatedstockvalue: number;

  stockValueChanged() {
    //this.stockValueChange.emit(
    //  { id: this.productId, updatedstockvalue: this.updatedstockvalue });
    //  this.updatedstockvalue = null;
  }

  ngOnChanges() {
    if (this.stock > 10) {
      this.color = 'green';
    } else {
      this.color = 'red';
    }
  }

}
