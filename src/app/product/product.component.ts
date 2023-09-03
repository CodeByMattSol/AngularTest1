import { Component, Input } from '@angular/core';
import { IRoot } from './product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input()
  product!: IRoot
}
