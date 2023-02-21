import { InicioPageComponent } from './pages/inicio-page/inicio-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PerfilPageComponent } from './pages/perfil-page/perfil-page.component';
import { InfoPageComponent } from './pages/info-page/info-page.component';
import { Login2PageComponent } from './pages/login2-page/login2-page.component';

const routes: Routes = [
  {path:'',redirectTo:'/login2-page', pathMatch:'full'},
  {path:'inicio-page',component:InicioPageComponent},
  {path:'login-page',component:LoginPageComponent},
  {path:'login2-page',component:Login2PageComponent},
  {path:'perfil-page',component:PerfilPageComponent},
  {path:'info-page',component:InfoPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
