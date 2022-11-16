import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  friends:Array<object>=[{name:'ahmed',age:2},{name:'omar',age:3}]
  constructor() { }
 
}
