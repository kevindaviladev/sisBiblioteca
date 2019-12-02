import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

//ROUTING
import { AppRoutingModule } from './app.routing';
// import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { NavbarModule } from './components/navbar/navbar.module';
import { FooterModule } from './components/footer/footer.module';
import { SidebarModule } from './components/sidebar/sidebar.module';
//MODULOS TEMPLATE MODIFICADO
import { AppComponent } from './app.component';
import { ModulesModule } from './modulos/modulos.module';
import { LoginModule } from './login/login.module';
import { LoginComponent } from './login/login.component';



@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    // NgbModule,
    ModulesModule,
    LoginModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
