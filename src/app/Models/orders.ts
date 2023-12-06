import { IProduct } from "./IProducts";

export interface Orders {
    _id:string;
    status:string;
    customer_Id:string;
    cart_Customer:IProduct[];
  }
  