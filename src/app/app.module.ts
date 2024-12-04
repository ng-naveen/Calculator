import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdditionComponent } from './addition/addition.component';
import { SubstractionComponent } from './substraction/substraction.component';
import { MultiplicationComponent } from './multiplication/multiplication.component';
import { FormsModule } from '@angular/forms';
import { DivisionComponent } from './division/division.component';
import { TempconverterComponent } from './tempconverter/tempconverter.component';
import { UsersComponent } from './users/users.component';
import { ProductlistComponent } from './productlist/productlist.component';

@NgModule({
  declarations: [
    AppComponent,
    AdditionComponent,
    SubstractionComponent,
    MultiplicationComponent,
    DivisionComponent,
    TempconverterComponent,
    UsersComponent,
    ProductlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
