import { Component } from '@angular/core';
import { AppConfig } from 'src/app/config/app.config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [AppConfig]
})
export class HeaderComponent {

  darkTheme: boolean = this.t.darkTheme;

  constructor(private t: AppConfig) {}
  
  public changeTheme() {
    this.t.darkTheme = !this.t.darkTheme;
    this.darkTheme = this.t.darkTheme;
  }

}
