import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './Components/products/products.component';
import { CustomersComponent } from './Components/customers/customers.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { RetailersComponent } from './Components/retailers/retailers.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { StatisticsComponent } from './Components/statistics/statistics.component';
import { RegisterComponent } from './Components/Register/register/register.component';
import { LoginComponent } from './Components/Login/login/login.component';
import { adminGuardGuard } from './Guards/admin-guard.guard';
import { GroupOfComponentsComponent } from './Components/group-of-components/group-of-components.component';

const routes: Routes = [
  {path:'' , redirectTo:'/dashboard' , pathMatch: 'full'},
  {path: 'dashboard' , component:DashboardComponent , title: 'dashboard page',canActivate:[adminGuardGuard]},
  {path: 'products' , component:ProductsComponent , title: 'products page',canActivate:[adminGuardGuard]},
  {path: 'customers' , component:CustomersComponent , title: 'customers page' , canActivate:[adminGuardGuard]},
  {path: 'orders' , component:OrdersComponent , title: 'orders page',canActivate:[adminGuardGuard]},
  {path: 'retailers' , component:RetailersComponent , title: 'retailers page',canActivate:[adminGuardGuard]},
  {path: 'statistics' , component:StatisticsComponent , title: 'statistics page', canActivate:[adminGuardGuard]},
  {path: 'singup', component:RegisterComponent , title: 'singup page'},
  {path: 'login', component:LoginComponent , title: 'login page'},
  {path:"**" , component:NotFoundComponent , title: 'not found page'}
];

// const routes: Routes = [
//   {path: 'main' , component:GroupOfComponentsComponent , children:[
//   {path:'' , redirectTo:'/main/dashboard' , pathMatch: 'full',},
//   {path: 'dashboard' , component:DashboardComponent , title: 'dashboard page',canActivate:[adminGuardGuard]},
//   {path: 'products' , component:ProductsComponent , title: 'products page',canActivate:[adminGuardGuard]},
//   {path: 'customers' , component:CustomersComponent , title: 'customers page' , canActivate:[adminGuardGuard]},
//   {path: 'orders' , component:OrdersComponent , title: 'orders page',canActivate:[adminGuardGuard]},
//   {path: 'retailers' , component:RetailersComponent , title: 'retailers page',canActivate:[adminGuardGuard]},
//   {path: 'statistics' , component:StatisticsComponent , title: 'statistics page', canActivate:[adminGuardGuard]},
//   {path: 'singup', component:RegisterComponent , title: 'singup page'}
//   ]},
//   {path: 'login', component:LoginComponent , title: 'login page'},
//   {path:"**" , component:NotFoundComponent , title: 'not found page'}
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
