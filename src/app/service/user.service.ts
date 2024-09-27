import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable  } from 'rxjs';
import {tap } from 'rxjs/operators';
import { Usuario } from '../usuario';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private listar : string = 'http://localhost:8080/users/allUsuarios';
  private create : string = 'http://localhost:8080/users/crear';
  private delete : string = 'http://localhost:8080/users'

  constructor(private http : HttpClient) { }
  getUsuarioList():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.listar);
  }
  createUsuario(usuario: Usuario): Observable<Usuario> {  
    return this.http.post<Usuario>(this.create, usuario).pipe(  
      tap((newUsuario: Usuario) => {  
          Swal.fire({  
          title: 'Registro Exitoso',  
          text: `Su registro es: ID ${newUsuario.id}`,  
          icon: 'success',  
          confirmButtonText: 'Aceptar'  
        });  
      })  
    );  
  }  
  deleteUserById(id: number):Observable<any>{
    return this.http.delete(this.delete + '/' + id);

  }

}  
