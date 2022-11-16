import { Component, OnInit } from '@angular/core';
import{Details}from'./../details'
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  // imgs:string[]=['assets/images/cabin.png','assets/images/cake.png','assets/images/circus.png','assets/images/game.png','assets/images/safe.png','assets/images/submarine.png']
  imgs:Array<Details>=[
    {id:"cabin",src:'assets/images/cabin.png',title:"LOG CABIN"},{id:'cake',src:'assets/images/cake.png',title:"TASTY CAKE"},{id:'circus',src:'assets/images/circus.png',title:"CIRCUS TENT"},
    {id:'game',src:'assets/images/game.png',title:"CONTROLLER"},{id:'safe',src:'assets/images/safe.png',title:'LOCKED SAFE'},{id:"submarine",src:'assets/images/submarine.png',title:'SUBMARINE'}
  ]
  constructor() { }


  ngOnInit(): void {
  
  }
 
  

}
