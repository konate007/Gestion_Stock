import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { ProduitService } from '../produit.service';
import { DetailsProduitComponent } from '../details-produit/details-produit.component';
import { Router } from '@angular/router';
import { Produit } from "../produit";
@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent implements OnInit {

  id: number;
  produits:Array<Produit>=new Array<Produit>();
  produit:Produit;

  ajouterProduit(a:Produit){
    
      this.service.ajouterProduit(a);
   }

  constructor(private service: ProduitService, private router: Router){}

  deleteProduit(a:Produit,id:any){
     
    if(confirm("voulez vous supprimer ce produit"))
    {
      this.service.deleteProduit(id);
      this.produits.splice(this.produits.indexOf(a),1);
    }
   
  }

  updateProduit(a:Produit){
    this.produit=a;
  }
  detailsProduit(id: number){
    this.router.navigate(['details', id]);
  }

  ngOnInit() {
    this.service.getAll().subscribe(data=>this.produits=data);
  
  }
  ngOnDestroy(){
    this.service.produit=this.produit;
  }

}
