// export interface Product {
//     id: number;
//     title: string;
//     description: string;
//     category: string;
//     price: number;
//     image: string;
//   }
export interface Product {
  id?: number;
  name: string;
  price: number;
  category: string;
  image_url: string;
  text: string;
}