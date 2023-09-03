import { Component, OnInit } from '@angular/core';
import { ProductService } from './service/product.service';
import { IRoot } from './product/product.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'myAppAngular';
  data:IRoot = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    rating: {
      rate: 0,
      count: 0
    }
  };

  constructor(private _prodServ: ProductService) {}

  ngOnInit(): void {
    this._prodServ.getData().subscribe(resp => {
      this.data = resp
    })
  }
}
