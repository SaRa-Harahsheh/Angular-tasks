import { Component } from '@angular/core';
import { UrlService } from '../service/url.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  constructor(private _ser: UrlService, private _active: ActivatedRoute) { }  //inject the service


  ngOnInit() {
    this.get();
  }
  categoryId: any;
  dataProduct: any;

  get() {
    this.categoryId = this._active.snapshot.paramMap.get("id");
    this._ser.getProductByCategoryId(this.categoryId).subscribe((data) => { this.dataProduct = data; })
  }

}
