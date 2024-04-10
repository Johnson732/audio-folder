

import { HttpClient, HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { LinkedlistComponent } from './linkedlist/linkedlist.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { InstaComponent } from './insta/insta.component';
import { ImgenComponent } from './imgen/imgen.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    LinkedlistComponent,
    AComponent,
    BComponent,
    InstaComponent,
    ImgenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
 
  ],
  providers: [importProvidersFrom(HttpClientModule),],
  bootstrap: [AppComponent]
})
export class AppModule { }
