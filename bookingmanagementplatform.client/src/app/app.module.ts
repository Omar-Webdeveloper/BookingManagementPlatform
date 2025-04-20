import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnasTestCompComponent } from './Anas/anas-test-comp/anas-test-comp.component';
import { TuqaTestCompComponent } from './Tuqa/tuqa-test-comp/tuqa-test-comp.component';
import { NavabrComponent } from './Omar/navabr/navabr.component';
import { FooterComponent } from './Omar/footer/footer.component';
import { HomepagecontentComponent } from './Omar/homepagecontent/homepagecontent.component';
import { AboutuscontentComponent } from './Omar/aboutuscontent/aboutuscontent.component';
import { ContactUScontentComponent } from './Mohammad/contact-uscontent/contact-uscontent.component';
import { LogincontentComponent } from './Rahaf/logincontent/logincontent.component';
import { RegistercontentComponent } from './Rahaf/registercontent/registercontent.component';
import { ProfilecontentComponent } from './Omar/profilecontent/profilecontent.component';
import { EditprofilecontentComponent } from './Omar/editprofilecontent/editprofilecontent.component';
import { ResetpasswordcontentComponent } from './Rahaf/resetpasswordcontent/resetpasswordcontent.component';
import { BookinghistorycontectComponent } from './Hala/bookinghistorycontect/bookinghistorycontect.component';
import { BookingformcontentComponent } from './Hala/bookingformcontent/bookingformcontent.component';
import { BookingPaymentcontentComponent } from './Hala/booking-paymentcontent/booking-paymentcontent.component';
import { ReviewRatingcontentComponent } from './Jana/review-ratingcontent/review-ratingcontent.component';
import { ShowAllRoomsCategoriesComponent } from './Jana/show-all-rooms-categories/show-all-rooms-categories.component';
import { ShowAllRoomsForOneCategoryComponent } from './Jana/show-all-rooms-for-one-category/show-all-rooms-for-one-category.component';
import { RoomDetailsComponent } from './Jana/room-details/room-details.component';
import { ForgotPasswordComponent } from './Rahaf/forgot-password/forgot-password.component';
import { VerifyCodeComponent } from './Rahaf/verify-code/verify-code.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { HalaTestCompComponent } from './Hala/hala-test-comp/hala-test-comp.component';
import { JanaTestCompComponent } from './Jana/jana-test-comp/jana-test-comp.component';
import { MohammadTestCompComponent } from './Mohammad/mohammad-test-comp/mohammad-test-comp.component';
import { OmarTestCompComponent } from './Omar/omar-test-comp/omar-test-comp.component';
import { RahafTestCompComponent } from './Rahaf/rahaf-test-comp/rahaf-test-comp.component';
import { FormsModule } from '@angular/forms';
import { AllRoomsComponent } from './Tuqa/all-rooms/all-rooms.component';
import { AddRoomComponent } from './Tuqa/add-room/add-room.component';
import { EditRoomComponent } from './Tuqa/edit-room/edit-room.component';
import { AllCategoryComponent } from './Tuqa/all-category/all-category.component';
import { AddCategoryComponent } from './Tuqa/add-category/add-category.component';
import { EditCategoryComponent } from './Tuqa/edit-category/edit-category.component';
import { UsersComponent } from './Tuqa/users/users.component';
import { AdminDashBoredComponent } from './Admin/admin-dash-bored/admin-dash-bored.component';
import { RequstBookingComponent } from './Admin/requst-booking/requst-booking.component';
import { ContactMessageComponent } from './Admin/contact-message/contact-message.component';



@NgModule({
  declarations: [
    AppComponent,
    AnasTestCompComponent,
    TuqaTestCompComponent,
    NavabrComponent,
    FooterComponent,
    HomepagecontentComponent,
    AboutuscontentComponent,
    ContactUScontentComponent,
    LogincontentComponent,
    RegistercontentComponent,
    ProfilecontentComponent,
    EditprofilecontentComponent,
    ResetpasswordcontentComponent,
    BookinghistorycontectComponent,
    BookingformcontentComponent,
    BookingPaymentcontentComponent,
    ReviewRatingcontentComponent,
    ShowAllRoomsCategoriesComponent,
    ShowAllRoomsForOneCategoryComponent,
    RoomDetailsComponent,
    ShowAllRoomsForOneCategoryComponent,
    ForgotPasswordComponent,
    VerifyCodeComponent,

    HalaTestCompComponent,
    JanaTestCompComponent,
    MohammadTestCompComponent,
    OmarTestCompComponent,
    RahafTestCompComponent,
    AllRoomsComponent,
    AddRoomComponent,
    EditRoomComponent,
    AllCategoryComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    UsersComponent
    ShowAllRoomsForOneCategoryComponent,
    AdminDashBoredComponent,
    RequstBookingComponent,
    ContactMessageComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, FormsModule,
    ReactiveFormsModule
  //  , SocialLoginModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('820022799549-l2ltlkctk8so89mifm9i1i38j5b5emqb.apps.googleusercontent.com')
          }
        ]
      } as SocialAuthServiceConfig,
    }
    AppRoutingModule, FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
