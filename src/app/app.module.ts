import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';


@NgModule({
  declarations: [ //composants du module
    AppComponent,
    FirstComponent,
    SecondComponent
  ],
  imports: [ //importer des modules externes
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [], //Définir la portée des services, définir des intercepteurs...
  bootstrap: [AppComponent] //Composant à charger par défaut
})
export class AppModule { }
