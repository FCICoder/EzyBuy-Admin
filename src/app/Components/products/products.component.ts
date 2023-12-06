import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Models/IProducts';
import { ProductsService } from 'src/app/Services/Products/products.service';
import { ToastrService } from 'ngx-toastr';
import { categories } from 'src/app/Models/categories';
import {CategoriesService} from "src/app/Services/categories/categories.service"
import { NgConfirmService } from 'ng-confirm-box';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products:IProduct[]=[];
  productId:string ="";
  productCat:string = "";
  productBrand:string = "";
  pageSize:number =20;
  currentPage:number =1;
  selectedProducts:IProduct[]=[];
  totalPages: number=0;  // Total number of pages
  categories:categories[] = [];
  isLoading: boolean = false ;
constructor(public prdService:ProductsService ,public toastr:ToastrService , public cateService:CategoriesService
  ,private spinner: NgxSpinnerService ,private confirm:NgConfirmService
  ){ }
ngOnInit(): void {
  this.isLoading = true;
  this.loadProducts();
  this.getAllCategories();
  this.spinner.show();

  setTimeout(() => {
    this.spinner.hide();
  }, 5000);
}
loadProducts():void{
  this.prdService.getAllProducts().subscribe({
    next: (data) => {
      this.products = data;
      this.selectedProducts=data;
      this.updateDisplayedProducts();
      this.isLoading = false;
      
    },
    error: (err) => {
      console.log(err);
      this.isLoading = false;
    }
  });
}
getAllCategories():void{
  this.cateService.getAllCategories().subscribe({
    next: (data) => {
      this.categories = data;
    },
    error: (err) => {
      console.log(err);
    }
  });

}
searchProductCat():void {
  if (this.productCat.trim()!=="") {
    if(this.productCat.toLowerCase()==="all"){
      this.loadProducts()

    }
    this.selectedProducts = this.products.filter(product => product.category.includes(this.productCat.trim()));
    this.totalPages = Math.ceil(this.selectedProducts.length / this.pageSize);  
    console.log(this.totalPages);
    
  }

  else{
    this.loadProducts()
  }
}
searchProductbrand():void {
  if (this.productBrand.trim()!=="") {
    this.selectedProducts = this.products.filter(product => product.brand.includes(this.productBrand.trim()));
  }
  else{
    this.loadProducts()
  }
}
updateDisplayedProducts():void{
  const startIndex = (this.currentPage - 1) * this.pageSize;
  this.selectedProducts = this.products.slice(startIndex, startIndex + this.pageSize);
}
onPageChange(page: number): void {
  this.currentPage = page;
  this.updateDisplayedProducts();
  this.totalPages = Math.ceil(this.products.length / this.pageSize);  

}

deleteProduct(productId: number): void {
  this.confirm.showConfirm("Are you sure want to delete?",
    () => {
      this.prdService.deleteProductById(productId).subscribe(
        () => {
          this.selectedProducts = this.selectedProducts.filter(product => product._id !== productId);
        },
        (error) => {
          console.error(error);
        }
      );
    },
    () => {
      console.log("Deletion canceled");
    }
  );
}
}
