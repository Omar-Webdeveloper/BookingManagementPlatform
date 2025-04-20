import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnasTestCompComponent } from './Anas/anas-test-comp/anas-test-comp.component';
import { JanaTestCompComponent } from './Jana/jana-test-comp/jana-test-comp.component';
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

@NgModule({
  declarations: [
    AppComponent,
    AnasTestCompComponent,
    JanaTestCompComponent,
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
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
