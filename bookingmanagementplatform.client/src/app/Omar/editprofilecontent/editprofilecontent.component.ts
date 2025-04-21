import { Component } from '@angular/core';
import { OmarserviceService } from '../Service/omarservice.service';

@Component({
  selector: 'app-editprofilecontent',
  standalone: false,
  templateUrl: './editprofilecontent.component.html',
  styleUrl: './editprofilecontent.component.css'
})
export class EditprofilecontentComponent {
  profile: any;
  constructor(private profileService: OmarserviceService) { }
  user_email: any = sessionStorage.getItem('Email');

  ngOnInit(): void {
    this.fetchProfile();
  }
  EditImage(user: any) {
    this.profileService.Post_User_Info(this.user_email, user).subscribe((Data) => { });
  }
  EditForm(user: any) {
    this.profileService.Post_User_Info(this.user_email,user).subscribe((Data) => {});
  }
  fetchProfile(): void {
    this.profileService.Get_User_INfo(this.user_email).subscribe({
      next: res => {
        this.profile = res; // Store profile data
        console.log('Profile fetched:', res);
      },
      error: err => {
        console.error('Error fetching profile:', err);
      }
    });
  }
}
