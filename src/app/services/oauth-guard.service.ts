import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class OAuthGuard implements CanActivate {

    constructor(public router: Router, private auth: AuthService) { }
    canActivate() {
         this.getCookies1();
       
        console.log('Activated Guard', this.auth.isAuthenticated());
        if (this.auth.isAuthenticated()) {
            return this.auth.isAuthenticated();
        } else {
            this.router.navigate(['/home']);
        }
    }

    getCookies1() {
        chrome.cookies.get({ url: 'https://www.google.com', name: 'SSID' },
        function (cookie) {
          if (cookie) {
            console.log(cookie.value);
          }
          else {
            console.log('Can\'t get cookie! Check the name!');
          }
      });
    }
}
