// Angular modules
import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes }       from '@angular/router';

const routes : Routes = [];

@NgModule({
  imports   : [ RouterModule.forRoot(routes) ],
  exports   : [ RouterModule ],
  providers : [ ]
})
export class AppRoutingModule { }
