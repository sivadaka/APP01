import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  userName: String;
  logos: string[];
  logoIndex:number;

  imgWidth: number;
  decorator: any;

  constructor() {
    this.userName = "Siva Kumar";

    this.logos = [
      "assets/imgs/download (1).jpg",
      "assets/imgs/download (1).png",
      "assets/imgs/download.png"
    ];
    this.logoIndex = 0;
    this.imgWidth = 300;

    this.decorator = {centered:true,bordered:true};
  }

  shift() {
    this.logoIndex++;
    if(this.logoIndex == this.logos.length) {
      this.logoIndex = 0;
    }
  }
}
