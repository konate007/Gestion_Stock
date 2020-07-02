import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http: HttpClient) {
  }

  public getJSON(): Observable<any> {
    return this.http.get("../assets/BD/produit.json");
  }

  public addProduit(produit: Object): Observable<any> {
    console.log(produit)
    return this.http.post("../assets/BD/produit.json", produit)
  }
}
