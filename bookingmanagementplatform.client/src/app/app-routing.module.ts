import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllRoomsComponent } from './Tuqa/all-rooms/all-rooms.component';
import { AddRoomComponent } from './Tuqa/add-room/add-room.component';
import { EditRoomComponent } from './Tuqa/edit-room/edit-room.component';
import { AllCategoryComponent } from './Tuqa/all-category/all-category.component';
import { AddCategoryComponent } from './Tuqa/add-category/add-category.component';
import { EditCategoryComponent } from './Tuqa/edit-category/edit-category.component';
import { UsersComponent } from './Tuqa/users/users.component';

const routes: Routes = [
  { path: "AllRooms", component: AllRoomsComponent },
  { path: "AddRoom", component: AddRoomComponent },
  { path: "EditRoom/:id", component: EditRoomComponent },
  { path: "AllCategories", component: AllCategoryComponent },
  { path: "AddCategory", component: AddCategoryComponent },
  { path: "EditCategory/:id", component: EditCategoryComponent },
  { path: "Users" , component: UsersComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
