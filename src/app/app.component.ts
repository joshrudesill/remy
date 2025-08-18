import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './features/login/login.component';
import { AuthService } from '@auth0/auth0-angular';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterModule, CommonModule, FormsModule, LoginComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  private auth = inject(AuthService);
  user = this.auth.user$;

  code$ = this.user.pipe(map((user) => JSON.stringify(user, null, 2)));
}
