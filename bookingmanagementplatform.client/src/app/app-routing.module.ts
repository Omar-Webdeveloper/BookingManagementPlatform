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
import { ShowAllRoomsCategoriesComponent } from './Jana/show-all-rooms-categories/show-all-rooms-categories.component';
import { ShowAllRoomsForOneCategoryComponent } from './Jana/show-all-rooms-for-one-category/show-all-rooms-for-one-category.component';
import { BookingformcontentComponent } from './Hala/bookingformcontent/bookingformcontent.component';
import { BookingPaymentcontentComponent } from './Hala/booking-paymentcontent/booking-paymentcontent.component';
import { RegisterComponent } from './Rahaf/register/register.component';
import { LoginComponent } from './Rahaf/login/login.component';
import { ResetPasswordComponent } from './Rahaf/reset-password/reset-password.component';
import { VerifyCodeComponent } from './Rahaf/verify-code/verify-code.component';
import { ForgotPasswordComponent } from './Rahaf/forgot-password/forgot-password.component';

const routes: Routes = [
  { path: '', component: HomepagecontentComponent },
  { path: 'About_US', component: AboutuscontentComponent },
  { path: 'Contact_US', component: ContactUScontentComponent },
  { path: 'Loginnn', component: LogincontentComponent },
  { path: 'Registerrrr', component: RegistercontentComponent },
  { path: 'Profile', component: ProfilecontentComponent },
  { path: 'EditProfile', component: EditprofilecontentComponent },
  { path: 'ResetPassworddddd', component: ResetpasswordcontentComponent },
  { path: 'BookingHistory', component: BookinghistorycontectComponent },
  { path: 'BookingForm', component: BookingformcontentComponent },
  { path: 'BookingPayment', component: BookingPaymentcontentComponent },
  { path: 'AllRoomsCategories', component: ShowAllRoomsCategoriesComponent },
  { path: 'AllRoomsForOneCategory', component: ShowAllRoomsForOneCategoryComponent },
<<<<<<< HEAD
  { path: 'AdminDashBoard', component: AboutuscontentComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'ResetPassword', component: ResetPasswordComponent },
  { path: 'VerifyCode', component: VerifyCodeComponent },
  { path: 'ForgotPassword', component: ForgotPasswordComponent }
=======
>>>>>>> 5124f836084c0546db92249c038d1bbb4a1b39d1
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





