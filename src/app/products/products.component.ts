import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProdcuctServiceService } from '../services/prodcuct-service.service';
import { Product } from '../model/Product';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  
  allProducts!: Product[]
  private unsubscribe$ = new Subject<void>();

  constructor(private httpClient: HttpClient, private productService: ProdcuctServiceService) { 
   
  }

  ngOnInit(): void {
    this.getAllProducts();
  
  }
  
  
getAllProducts() {
  this.productService.getAllProducts()
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(
      response => {
        this.allProducts = response;
      }
    );
}

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
