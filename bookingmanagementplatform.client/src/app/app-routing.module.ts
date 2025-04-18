import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutuscontentComponent } from './Omar/aboutuscontent/aboutuscontent.component';
import { HomepagecontentComponent } from './Omar/homepagecontent/homepagecontent.component';
import { ContactUScontentComponent } from './Mohammad/contact-uscontent/contact-uscontent.component';
import { LogincontentComponent } from './Rahaf/logincontent/logincontent.component';
import { RegistercontentComponent } from './Rahaf/registercontent/registercontent.component';
import { ProfilecontentComponent } from './Omar/profilecontent/profilecontent.component';
import { EditprofilecontentComponent } from './Omar/editprofilecontent/editprofilecontent.component';
import { ResetpasswordcontentComponent } from './Rahaf/resetpasswordcontent/resetpasswordcontent.component';
import { BookinghistorycontectComponent } from './Hala/bookinghistorycontect/bookinghistorycontect.component';

const routes: Routes = [
  { path: 'Home', component: HomepagecontentComponent },
  { path: 'About_US', component: AboutuscontentComponent },
  { path: 'Contact_US', component: ContactUScontentComponent },
  { path: 'Login', component: LogincontentComponent },
  { path: 'Register', component: RegistercontentComponent },
  { path: 'Profile', component: ProfilecontentComponent },
  { path: 'EditProfile', component: EditprofilecontentComponent },
  { path: 'ResetPassword', component: ResetpasswordcontentComponent },
  { path: 'BookingHistory', component: BookinghistorycontectComponent },
  { path: 'BookingForm', component: BookinghistorycontectComponent },
  { path: 'AdminDashBoard', component: AboutuscontentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





