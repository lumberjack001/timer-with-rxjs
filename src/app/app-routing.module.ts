import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SecondPageComponent } from './components/second-page/second-page.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
},{
  path: 'page-2',
  component: SecondPageComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
