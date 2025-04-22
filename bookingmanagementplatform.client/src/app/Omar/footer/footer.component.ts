import { Component } from '@angular/core';
import { AuthService } from '../../Rahaf/auth.service';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  constructor(private _auth: AuthService) { }

  loginneduser = true;
  ngOnInit(): void {


    this._auth.user$.subscribe((data) => {
      //debugger
      if (data == "Admin@gmail.com") {
        this.loginneduser = false;
      }

    })


    let admin = sessionStorage.getItem('isAdmin');
    if (admin == "Admin@gmail.com") {
      this.loginneduser = false;
    }

  }
}
