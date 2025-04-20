import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnasTestCompComponent } from './Anas/anas-test-comp/anas-test-comp.component';
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


@NgModule({
  declarations: [
    AppComponent,
    AnasTestCompComponent,
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
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
