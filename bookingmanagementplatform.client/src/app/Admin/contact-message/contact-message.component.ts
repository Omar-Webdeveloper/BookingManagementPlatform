import { Component } from '@angular/core';
import { UrlAdminService } from '../../AdminService/url-admin.service';

@Component({
  selector: 'app-contact-message',
  standalone: false,
  templateUrl: './contact-message.component.html',
  styleUrl: './contact-message.component.css'
})
export class ContactMessageComponent {
  constructor(private _ser: UrlAdminService) { }

  ngOnInit()
  {
    this.ContactMessage();
  }

  contactMessageData: any
  ContactMessage() {
    this._ser.contactMessage().subscribe((data: any) => {
      this.contactMessageData = data;
    });
  }

}
