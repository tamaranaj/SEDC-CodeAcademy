export interface Product{
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: Rating
}

export interface Rating{
    rate: 0,
    count: 0
}

export enum Category{
    electronics= "electronics",
    jewelery = "jewelery",
    men= "men's clothing",
    women = "women's clothing"
}


export class ProductCreationProps{
    title: string
    price: string
    description: string
    category: Category
    image: string
   constructor(title:string, price:string, description:string, category:Category, image:string){
    this.title = title
    this.price = price
    this.description = description
    this.category = category
    this.image = image
   }
}
