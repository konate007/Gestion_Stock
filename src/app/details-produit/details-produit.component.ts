import { Produit } from '../produit';
import { Component, OnInit, Input } from '@angular/core';
import { ListProduitComponent } from '../list-produit/list-produit.component';
import { Router, ActivatedRoute } from '@angular/router';
import { ProduitService } from '../produit.service';
@Component({
  selector: 'app-details-produit',
  templateUrl: './details-produit.component.html',
  styleUrls: ['./details-produit.component.css']
})
export class DetailsProduitComponent implements OnInit {

  id: number;
  produit: Produit;

  constructor(private route: ActivatedRoute,private router: Router, private produitService: ProduitService) { }

  ngOnInit(){
    //this.produit = new Produit();

    this.id = this.route.snapshot.params['id'];
    
    this.produitService.getProduit(this.id)
      .subscribe(data => {
        console.log(data)
        this.produit = data;
      }, error => console.log(error));
    
 }

list(){
  this.router.navigate(['produits']);
}
 
}
