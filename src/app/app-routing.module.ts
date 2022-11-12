import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProtfolioComponent } from './protfolio/protfolio.component';

const routes: Routes = [
  {path:'' , redirectTo:'header' , pathMatch:'full' },
  {path:'header',component:HeaderComponent},
  {path:'protfolio',component:ProtfolioComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},



  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
