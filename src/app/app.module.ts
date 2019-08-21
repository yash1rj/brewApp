import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http'; 

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list', component: ListComponent }
];

@NgModule({
  imports: [ BrowserModule, FormsModule, RouterModule.forRoot(routes), HttpClientModule  ],
  declarations: [ AppComponent, HomeComponent, ListComponent ],
  bootstrap:    [ AppComponent ],
  exports: [RouterModule],
  providers: [HttpService]
})

export class AppModule { }
