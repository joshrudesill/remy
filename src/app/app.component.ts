import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeroService } from './heroes/hero.service';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './features/login/login.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule, LoginComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
