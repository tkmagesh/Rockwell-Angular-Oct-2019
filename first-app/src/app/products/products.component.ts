import { Component } from '@angular/core';

@Component({
    selector : 'app-products',
    templateUrl : 'products.component.html'
})
export class ProductsComponent{
    productsList : string[] = [ ];

    onAddNewClick(newProductName : string){
        this.productsList.push(newProductName);
    }
}