import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { InicioPageComponent } from './pages/inicio-page/inicio-page.component';
import { MenuComponent } from './components/menu/menu.component';
import { BannerComponent } from './components/banner/banner.component';
import { InfoComponent } from './components/info/info.component';
import { InfoPageComponent } from './pages/info-page/info-page.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { PerfilPageComponent } from './pages/perfil-page/perfil-page.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { FotosPageComponent } from './pages/fotos-page/fotos-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    LoginPageComponent,
    InicioPageComponent,
    MenuComponent,
    BannerComponent,
    InfoComponent,
    InfoPageComponent,
    PerfilComponent,
    PerfilPageComponent,
    FotosComponent,
    FotosPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
