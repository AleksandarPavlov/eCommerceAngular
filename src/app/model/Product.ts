export class Product{
    constructor(
      public id: String,
      public name: string,
      public description: string,
      public category: String,
      public brandId: String,
      public brandName: String,
      public price: number,
      public available: Boolean,
      public imageName: String,
      public imageUrl: String
  
    ){}
  }