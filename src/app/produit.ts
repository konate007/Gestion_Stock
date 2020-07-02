export class Produit {
    constructor(private id:number,private nom:string,private prix:number,private qtite:number,private desc:string){}
    get getNom():string{return this.nom}
    get getPrix():number{return this.prix}
    get getQtite():number{return this.qtite}
    get getDesc():string{return this.desc}
    get  getId():number{return this.id;}
    set setNom(nom : string) { this.nom = nom;}
    set setPrix(prix : number) { this.prix = prix;}
    set setQtite(qtite : number) { this.qtite = qtite;}
    set setDesc(desc : string) { this.desc = desc;}
}
