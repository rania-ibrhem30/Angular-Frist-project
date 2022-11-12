import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { ProtfolioComponent } from './protfolio/protfolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FooterComponent } from './footer/footer.component';
import { ModelComponent } from './model/model.component';



@NgModule({
  declarations: [
      AppComponent,
      NavbarComponent,
      HeaderComponent,
      ProtfolioComponent,
      AboutComponent,
      ContactComponent,
      NotfoundComponent,
      FooterComponent,
      ModelComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
