import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from '../produit';
import { NgForm } from '@angular/forms';
import { ProduitService } from '../produit.service';
@Component({
  selector: 'app-ajouter-produit',
  templateUrl: './ajouter-produit.component.html',
  styleUrls: ['./ajouter-produit.component.css']
})
export class AjouterProduitComponent implements OnInit {
  
  p1:any;
  p2:any;
  p3:any;
  p4:any;
  
  id: number;
  produits:Array<Produit>=new Array<Produit>();
  constructor(private service:ProduitService, private route: Router) { }
  ajouterProduit(myForm:NgForm){

    const nom = myForm.value['nom'];
    const prix = myForm.value['prix'];
    const qtite = myForm.value['qtite'];
    const desc = myForm.value['desc'];
    let pro =new Produit(this.id,nom,prix,qtite,desc);
    this.p1="";
    this.p2="";
    this.p3="";
    this.p4="";

    if(this.produits.length == 0){
      this.id = 1;
      
    }else{
      let id=this.produits[(this.produits.length-1)].getId+1;

    }
    
    this.service.ajouterProduit(new Produit(this.id,nom,prix,qtite,desc));
    this.route.navigateByUrl('/produits');
    
   
  }
  ngOnInit(){
     this.service.getAll().subscribe(data=>this.produits=data);
     
  }

}
