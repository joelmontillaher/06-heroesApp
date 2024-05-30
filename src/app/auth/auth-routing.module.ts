import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegistrerPageComponent } from './pages/registrer-page/registrer-page.component';

const routes:Routes = [
{
  path:'',
  component: LayoutPageComponent,
  children: [
    {path: 'login', component:LoginPageComponent},
    {path: 'new-account', component:RegistrerPageComponent},
    {path: '**', redirectTo:'login'},
  ]
},

]
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AuthRoutingModule {}
