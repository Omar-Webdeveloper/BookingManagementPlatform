import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutuscontentComponent } from './Omar/aboutuscontent/aboutuscontent.component';
import { HomepagecontentComponent } from './Omar/homepagecontent/homepagecontent.component';

const routes: Routes = [
  { path: 'Home', component: HomepagecontentComponent },
  { path: 'About_US', component: AboutuscontentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
