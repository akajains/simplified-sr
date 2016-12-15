import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent }   from './app.component';
import {WorkCode} from './manager/workCodeChangeRequestManager.component'
import {Header} from './shared/header/header.component'
import {Footer} from './shared/footer/footer.component'
import {EmployeeService} from './shared/service/employee.service'
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';

const appRoutes: Routes = [
  { path: 'work-cr/:id', component: WorkCode },
   { path: '', component: AppComponent }
];
  

@NgModule({
  imports:      [ BrowserModule,RouterModule.forRoot(appRoutes),HttpModule,FormsModule,JsonpModule,Ng2AutoCompleteModule ],                       
  declarations: [ AppComponent,WorkCode,Header,Footer ],         
  providers:    [ EmployeeService],
  bootstrap:    [ AppComponent ] 
})

export class AppModule { }
