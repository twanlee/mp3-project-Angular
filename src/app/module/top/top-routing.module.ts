import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TopTrendingComponent} from '../../components/tops/top-trending/top-trending.component';


const routes: Routes = [
  {path: '', component: TopTrendingComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopRoutingModule { }
