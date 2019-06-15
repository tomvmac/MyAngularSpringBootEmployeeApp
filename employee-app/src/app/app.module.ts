import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EmployeelistComponent } from "./components/employeelist/employeelist.component";
import { HelloComponent } from './components/hello/hello.component';

@NgModule({
  declarations: [AppComponent, EmployeelistComponent, HelloComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
