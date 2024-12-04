import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-productlist',
  standalone: false,

  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent implements OnInit{
  
  products:any;
  constructor(private service:ProductsService) {
    
  }

  ngOnInit(): void {
    this.service.getProducts().then((response) => response.json()).then((data) => this.products = data);
  }

}
