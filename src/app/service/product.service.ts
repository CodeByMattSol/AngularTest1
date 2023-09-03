import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { IRoot } from "../product/product.interface";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    constructor(private _http: HttpClient) { }

    url:string = 'https://fakestoreapi.com/products/2'

    getData():Observable<IRoot> {
        return this._http.get<IRoot>(this.url)
    }
}