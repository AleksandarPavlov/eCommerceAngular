import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ProdcuctServiceService } from '../services/prodcuct-service.service';
import { Brand } from '../model/Brand';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent {
  allBrands!: Brand[]
  private unsubscribe$ = new Subject<void>();

  constructor(private httpClient: HttpClient, private productService: ProdcuctServiceService) { 
   
  }

  ngOnInit(): void {
    this.getAllBrands();
  
  }
  
  
getAllBrands() {
  this.productService.getAllBrands()
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(
      response => {
        this.allBrands = response;
        console.log(this.allBrands)
      }
    );
}

ngOnDestroy(): void {
  this.unsubscribe$.next();
  this.unsubscribe$.complete();
}
}
