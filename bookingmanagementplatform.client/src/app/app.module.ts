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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
