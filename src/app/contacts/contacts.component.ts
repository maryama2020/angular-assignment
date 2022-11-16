import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
contactUsers:object[]=[]
  constructor(_usersService:UsersService) {
    this.contactUsers= _usersService.friends
    console.log(_usersService);
    
   }


  ngOnInit(): void {
  }
  userName:string='ahmed';
  userAge:number=30;
  link:string='https://www.google.com'
  imageSrc:string='assets/sun.webp'
  sayWelcome(eventInfo:any){
    console.log(eventInfo.target)
  }

}
