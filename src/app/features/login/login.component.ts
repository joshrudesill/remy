import { Component, Inject, inject } from '@angular/core';
import { CommonModule, DOCUMENT, NgOptimizedImage } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'login',
  imports: [RouterOutlet, CommonModule, FormsModule, NgOptimizedImage],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(
    @Inject(DOCUMENT) public document: Document,
    public auth: AuthService
  ) {}
}
