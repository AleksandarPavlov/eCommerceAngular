import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
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
 cols!: String;
  constructor(private httpClient: HttpClient, private productService: ProdcuctServiceService) { 
   
  }

  ngOnInit(): void {
    this.getAllProducts();
    this.updateCols();
  
  }
  
  
getAllProducts() {
  this.productService.getAllProducts()
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(
      response => {
        this.allProducts = response;
        console.log(this.allProducts)
      }
    );
}

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
  @HostListener("window:resize", []) updateCols() {
  
    switch (true) {
      case window.innerWidth <= 1150:
        this.cols = "3";
        break;
      case window.innerWidth < 1450 && window.innerWidth > 1150:
        this.cols = "4";
        break;
      case window.innerWidth > 1450:
        this.cols = "5";
        break;
      // Add more cases if needed
    }
    
    
  }
}
