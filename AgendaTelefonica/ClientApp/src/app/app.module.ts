import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ContactosComponent } from './Contactos/Contactos.component';
import { ListaContactosComponent } from './Lista-Contactos/ListaContactos.component';
import { ContactosService } from './services/Contactos.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ContactosComponent,
    ListaContactosComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'contactos', component: ContactosComponent },
      { path: 'lista-contactos', component: ListaContactosComponent },
    ])
  ],
  providers: [ ContactosService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
