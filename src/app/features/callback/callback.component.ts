import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-callback',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './callback.component.html',
})
export class CallbackComponent {
  private auth = inject(AuthService);
  error$ = this.auth.error$;
}
