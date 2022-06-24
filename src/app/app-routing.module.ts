import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
//import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: "signin", component: LoginComponent},
  { path: "home", component: HomeComponent},
  { path: "about-us", component: AboutUsComponent},
  { path: "contact-us", component: ContactUsComponent},
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
