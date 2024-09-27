import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserAddComponent } from './components/user-add/user-add.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routs : Routes = [ 
  {path:'',component:UserListComponent},//http://localhost:4200 
  {path:'users/add', component:UserAddComponent}//http://localhost:4200/users/add

];

@NgModule({
  declarations: [
    AppComponent,
    EjemploComponent,
    UserListComponent,
    UserAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routs)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
