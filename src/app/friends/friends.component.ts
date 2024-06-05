import { Component } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent {

  friendsList: string[];
  friendName: string;

  constructor() {
    this.friendsList=["vamsy", "sasgar"];
    this.friendName = "";
  }

  remove(index:number) {
    this.friendsList.splice(index,1);
  }

  add() {
    this.friendsList.push(this.friendName);
    this.friendName = '';
  }

}
