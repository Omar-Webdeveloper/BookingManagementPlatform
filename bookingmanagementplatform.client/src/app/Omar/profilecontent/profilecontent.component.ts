import { Component } from '@angular/core';
import { OmarserviceService } from '../Service/omarservice.service';

@Component({
  selector: 'app-profilecontent',
  standalone: false,
  templateUrl: './profilecontent.component.html',
  styleUrl: './profilecontent.component.css'
})
export class ProfilecontentComponent {
  profile: any;
  constructor(private profileService: OmarserviceService) { }
     user_email :any = sessionStorage.getItem('Email') ;

  ngOnInit(): void {
    this.fetchProfile();
  }
  fetchProfile(): void {
    debugger
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
