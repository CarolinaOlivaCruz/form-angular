import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userName = 'Joaquim';

  userData = {
    email: 'joaquim@mail.com',
    phone: 555555555,
  };

  title = 'moments';
}
