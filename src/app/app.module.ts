import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { ButtonComponent } from './components/button/button.component';
import { InfoComponent } from './components/info/info.component';
import { CategoryComponent } from './components/category/category.component';
import {TimeCardComponent} from './components/time-card/time-card.component';

@NgModule({
  declarations: [						
    AppComponent,
      CardComponent,
      ButtonComponent,
      InfoComponent,
      CategoryComponent,
      TimeCardComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
