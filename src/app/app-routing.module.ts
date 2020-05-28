import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {HelloComponent} from "./hello/hello.component";
import {WorldComponent} from "./world/world.component";


const routes: Routes = [
  {path: 'hello', component: HelloComponent},
  {path: 'world', component: WorldComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
