import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ProdcuctServiceService } from '../services/prodcuct-service.service';
import { Product } from '../model/Product';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  
  allProducts!: Product[]
  private unsubscribe$ = new Subject<void>();
 cols!: String;
 gutterSize!:String;
 rowHeight!:String;
  constructor(private httpClient: HttpClient, private productService: ProdcuctServiceService, private breakpointObserver: BreakpointObserver) { 
   
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

  @HostListener("window:resize", [])
  updateCols() {
  if (this.breakpointObserver.isMatched('(max-width: 501px)')) {
    this.cols = "2";
    this.rowHeight="550px"
    this.gutterSize="15px"
  } 
  if (this.breakpointObserver.isMatched('(max-width: 741px) and (min-width: 500px)')) {
    this.cols = "2";
    this.rowHeight="555px"
    this.gutterSize="45px"
  } 
  if (this.breakpointObserver.isMatched('(max-width: 1151px) and (min-width: 740px)')) {
    this.cols = "3";
    this.rowHeight="575px"
    this.gutterSize="45px"
  } 
  if (this.breakpointObserver.isMatched('(max-width: 1451px) and (min-width: 1150px)')) {
    this.cols = "4";
    this.rowHeight="575px"
    this.gutterSize="45px"
  } 
  if (this.breakpointObserver.isMatched('(min-width: 1450px)')) {
    this.cols = "5";
    this.rowHeight="575px"
    this.gutterSize="45px"
  } 
}

  // @HostListener("window:resize", []) updateCols() {
    
  //   switch (true) {
  //     case window.innerWidth < 500:
  //       this.cols = "1";
  //       this.rowHeight="1000px"
  //       console.log("1")
  //       break;
  //     case window.innerWidth < 740 && window.innerWidth > 500:
  //       this.rowHeight="555px";
  //       this.cols = "2";
  //       console.log("2")
  //       break;
  //     case window.innerWidth <= 1150 && window.innerWidth > 740:
  //       this.cols = "3";
  //       this.rowHeight = "575px";
  //       console.log("3")
  //       break;
  //     case window.innerWidth < 1450 && window.innerWidth > 1150:
  //       this.cols = "4";
  //       this.rowHeight="575px";
  //       console.log("4")
  //       break;
  //     case window.innerWidth > 1450:
  //       this.cols = "5";
  //       this.rowHeight="575px";
  //       console.log("5")
  //       break;
  //     // Add more cases if needed
  //   }
 
  // }
}
