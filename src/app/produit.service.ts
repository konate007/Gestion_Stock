 import { Injectable } from '@angular/core';
 import {HttpClient,HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
 import { Observable } from 'rxjs';
 import {Produit} from './produit';

 @Injectable({
   providedIn: 'root'
 })
 export class ProduitService {

   httpOptions = {
     headers: new HttpHeaders({'Content-Type': 'application/json'})
   };
   url:string ='http://localhost:3000/produits';
   //produits:Array< Produit>=new Array< Produit>();
   produit: Produit;
   //id: number;

   constructor(private http:HttpClient) {}

   ajouterProduit(a:Produit){
    
    return this.http.post(this.url, a).subscribe(
      res=>console.log(res),
      err=>console.log(err)); 
  }
   deleteProduit(a:any){
    const url1=this.url+"/"+a;
    this.http.delete(url1).subscribe(data =>{
      console.log("delete Request is successful",data);
    },
    error  => {

      console.log("Error", error);
      
      }
      
    );
  }

  getAll():Observable<Array<Produit>>{
    return this.http.get<Array<Produit>>(this.url);
  }


   updateProduit(a:any,produit:Produit){
    const url1=this.url+"/"+a;
    this.http.put(url1, produit).subscribe(data =>{
      console.log("update Request is successful",data);
    },
    error  => {

      console.log("Error", error);
      
      }
      
    );
  }
  getProduit(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }
  detailsProduit(){}

 }
