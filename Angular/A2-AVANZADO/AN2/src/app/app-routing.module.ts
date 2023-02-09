import { InicioPageComponent } from './pages/inicio-page/inicio-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PerfilPageComponent } from './pages/perfil-page/perfil-page.component';

const routes: Routes = [
  {path:'',redirectTo:'/login-page', pathMatch:'full'},
  {path:'/inicio',component:InicioPageComponent},
  {path:'/login-page',component:LoginPageComponent},
  {path:'/perfil',component:PerfilPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
