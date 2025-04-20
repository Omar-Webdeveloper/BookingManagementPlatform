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
import { RoomDetailsComponent } from './Jana/room-details/room-details.component';
import { VerifyCodeComponent } from './Rahaf/verify-code/verify-code.component';
import { ForgotPasswordComponent } from './Rahaf/forgot-password/forgot-password.component';
import { AllRoomsComponent } from './Tuqa/all-rooms/all-rooms.component';
import { AddRoomComponent } from './Tuqa/add-room/add-room.component';
import { EditRoomComponent } from './Tuqa/edit-room/edit-room.component';
import { AllCategoryComponent } from './Tuqa/all-category/all-category.component';
import { AddCategoryComponent } from './Tuqa/add-category/add-category.component';
import { EditCategoryComponent } from './Tuqa/edit-category/edit-category.component';
import { UsersComponent } from './Tuqa/users/users.component';
import { ContactMessageComponent } from './Admin/contact-message/contact-message.component';
import { RequstBookingComponent } from './Admin/requst-booking/requst-booking.component';
import { AdminDashBoredComponent } from './Admin/admin-dash-bored/admin-dash-bored.component';

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
  { path: 'AdminDashBoard', component: AboutuscontentComponent },
  { path: "selectedRoom/:id", component: RoomDetailsComponent },
  { path: 'AdminDashBoard', component: AboutuscontentComponent },
  { path: 'VerifyCode', component: VerifyCodeComponent },
  { path: 'ForgotPassword', component: ForgotPasswordComponent },
  

  
  {
    path: 'AdminDashBoard', component: AdminDashBoredComponent, children: [
      { path: 'Contact', component: ContactMessageComponent },
      { path: 'RequstBooking', component: RequstBookingComponent },
      { path: "AllRooms", component: AllRoomsComponent },
      { path: "AddRoom", component: AddRoomComponent },
      { path: "EditRoom/:id", component: EditRoomComponent },
      { path: "AllCategories", component: AllCategoryComponent },
      { path: "AddCategory", component: AddCategoryComponent },
      { path: "EditCategory/:id", component: EditCategoryComponent },
      { path: "Users", component: UsersComponent },
  ] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





