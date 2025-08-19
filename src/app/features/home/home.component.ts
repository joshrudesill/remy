import { Component, inject, OnInit } from '@angular/core';
import { Service } from '../../heroes/hero.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  a = inject(Service);
  private auth = inject(AuthService);
  user = this.auth.user$;

  ngOnInit() {
    this.a.get('t').subscribe((result) => {
      console.log(result);
    });
  }
}
