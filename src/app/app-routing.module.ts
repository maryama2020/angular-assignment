import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:"about",component:AboutComponent},
  {path:'contact',component:ContactsComponent},
  {path:'portfolio',component:PortfolioComponent},
  {path:'404',component:NotfoundComponent},
  {path:'**',redirectTo:'404'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
