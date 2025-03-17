import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UrlService } from '../service/url.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css'
})
export class SingleProductComponent {

  constructor(private _ser: UrlService, private _active: ActivatedRoute) { }  //inject the service


  ngOnInit() {
    this.get();
  }
  product: any;
  dataProduct: any;

  get() {
   
    this.product = this._active.snapshot.paramMap.get("id");
    this._ser.getProductByProductId(this.product).subscribe((data) => {
 
      this.dataProduct = data;


    })
  }

}
