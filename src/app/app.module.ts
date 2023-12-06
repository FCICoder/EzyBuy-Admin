import { NgModule , CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { PieChartComponent } from './Components/pie-chart/pie-chart.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { CardsComponent } from './Components/cards/cards.component';
import { ColumnChartComponent } from './Components/column-chart/column-chart.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { CustomersComponent } from './Components/customers/customers.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { ProductsComponent } from './Components/products/products.component';
import { RetailersComponent } from './Components/retailers/retailers.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { StatisticsComponent } from './Components/statistics/statistics.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { RegisterComponent } from './Components/Register/register/register.component';
import { LoginComponent } from './Components/Login/login/login.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { BarChartComponent } from './Components/bar-chart/bar-chart.component';
import { LineChartComponent } from './Components/line-chart/line-chart.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {NgConfirmModule} from 'ng-confirm-box';
import { GroupOfComponentsComponent } from './Components/group-of-components/group-of-components.component';
import { AppBarChartComponent } from './Components/app-bar-chart/app-bar-chart.component';
@NgModule({
  declarations: [
    AppComponent,
    PieChartComponent,
    CardsComponent,
    ColumnChartComponent,
    DashboardComponent,
    CustomersComponent,
    OrdersComponent,
    ProductsComponent,
    RetailersComponent,
    NotFoundComponent,
    StatisticsComponent,
    RegisterComponent,
    LoginComponent,
    BarChartComponent,
    LineChartComponent,
    GroupOfComponentsComponent,
    AppBarChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    CanvasJSAngularChartsModule,
    MatListModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-center',
      preventDuplicates: true,
    }
    ),
    NgApexchartsModule,
    FontAwesomeModule,
    NgConfirmModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
