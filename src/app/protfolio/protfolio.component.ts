import { Component, OnInit } from '@angular/core';
declare var window:any ;
@Component({
  selector: 'app-protfolio',
  templateUrl: './protfolio.component.html',
  styleUrls: ['./protfolio.component.css']
})
export class ProtfolioComponent implements OnInit {
   formModal:any;
   imgData=0;

   data =[
    {img: 'assets/img/cabin.png',des:'LOG CABIN'},
    {img: 'assets/img/cake.png',des:'TASTY CAKE'},
    {img: 'assets/img/circus.png',des:'CIRCUS TENT'},
    {img: 'assets/img/game.png',des:'CONTROLLER'},
    {img:'assets/img/safe.png',des:'LOCKED SAFE'},
    {img:'assets/img/submarine.png',des:'SUBMARINE'}
   ];
  constructor() { }

  ngOnInit(): void {
    
  }
 openModel(){
  this.formModal.show();
 }

closeModel(){
  this.formModal.hide();
}
  sendData(i:number){
    this.imgData=i;
  }

}
