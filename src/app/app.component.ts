import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeroService } from './heroes/hero.service';
import { NgIf } from '../../node_modules/@angular/common/common_module.d-NEF7UaHr';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  res: any[] = [];
  loading = false;
  m = 0;

  s = inject(HeroService);

  load() {
    this.loading = true;
    this.res = [];
    this.s.get().subscribe({
      next: (r: any) => {
        console.log(r);
        this.loading = false;
        this.res = r;
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
}
