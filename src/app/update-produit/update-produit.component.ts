import { Component, OnInit } from '@angular/core';
import { Produit } from '../produit';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ProduitService } from '../produit.service';
@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css']
})
export class UpdateProduitComponent implements OnInit {

  
  produits:Array<Produit>=new Array<Produit>();
  produit:Produit;
  constructor( private service : ProduitService, private router: Router) { }
  updateProduit(myForm:NgForm, id:any){
   
    const nom=myForm.value['nom'];
    const prix=myForm.value['prix'];
    const qtite=myForm.value['qtite'];
    const desc=myForm.value['desc'];

    this.service.updateProduit(id,new Produit(id,nom,prix,qtite,desc));
    alert("Produit modifier");
    this.router.navigate(['produits']);
  }
  
  ngOnInit() {
    this.produit=this.service.produit;
    this.service.getAll().subscribe(data=>this.produits=data);
  }
}
