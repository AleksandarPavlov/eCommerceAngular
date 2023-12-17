import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdcuctServiceService {

  constructor(private httpClient: HttpClient) { 

  }

  getAllProducts() {
    return this.httpClient.get<any>("http://192.168.1.243:8080/api/v1/products");
  }

  getAllBrands(){
    return this.httpClient.get<any>("http://localhost:8080/api/v1/brands");
  }
}