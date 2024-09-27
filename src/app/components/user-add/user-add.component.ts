import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../usuario';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.css'
})
export class UserAddComponent implements OnInit{
  
    id: number = 0;        
    nombre: string = '';    
    apellidoPaterno: string = '';
    apellidoMaterno: string = '';
    edad: number = 0;    
    email: string = '';        
    fechaModificacion: Date | undefined

    constructor(private userService : UserService){

    }
    
ngOnInit(): void {
   
}
addUser(){
  let user = new Usuario(this.id, this.nombre, this.apellidoPaterno, this.apellidoMaterno, this.edad, this.email, this.fechaModificacion);
  console.log(user);
  this.userService.createUsuario(user).subscribe(
    res => console.log(user)
  );
}
 

}
