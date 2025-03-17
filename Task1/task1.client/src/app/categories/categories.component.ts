import { Component } from '@angular/core';
import { UrlService } from '../service/url.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  constructor(private _ser: UrlService) { }   //*


  ngOnInit() {
    this.get();
  }

  dataCategory: any;
  
  get() {
    this._ser.getData().subscribe((data) => { this.dataCategory = data; })
  }


}
