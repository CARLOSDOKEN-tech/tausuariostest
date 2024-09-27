import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../usuario';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  user : Usuario [] = [];

  constructor(private userService : UserService){}

  ngOnInit(): void {
    this.listUsers();
  }
 listUsers(){
   this.userService.getUsuarioList().subscribe(
    data => {
      this.user = data;
      console.log(this.user)
    }
  );
 }
 deleteUser(id: number){
  console.log(id)
  this.userService.deleteUserById(id).subscribe(
    ()=> this.listUsers() 
  );
  
 }

}
