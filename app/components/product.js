import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ProductComponent extends Component {
  @tracked quantity = 0;
  @tracked total_price = 0;

  @action
  addToCart(e) {
    if (e.target.id === 'GR1') {
      this.quantity += 2;
      this.total_price += 3.11;
    } // tea
    if (e.target.id === 'SR1') {
      this.quantity++;
      if (this.quantity >= 3) { this.total_price += 4.50 } else { this.total_price += 5.00 }
    } // strawberries
    if (e.target.id === 'CF1') {
      this.quantity++;
      if (this.quantity >= 3) { this.total_price += 11.23 / 3 * 2 } else { this.total_price += 11.23 }
    } // coffee

  }

}
