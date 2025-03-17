import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private _url: HttpClient) { }


  getData() {
    return this._url.get<any>("https://67cd64b6dd7651e464ee3d63.mockapi.io/categories")
  }

  getProductByCategoryId(categoryId : any) {
    return this._url.get<any>("https://67cd64b6dd7651e464ee3d63.mockapi.io/products")
  }

  getProductByProductId(product: any) {
    return this._url.get<any>(`https://67cd64b6dd7651e464ee3d63.mockapi.io/products/${product}`)
  }
}
