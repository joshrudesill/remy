import { Component, inject, OnInit } from '@angular/core';
import { Service } from '../../heroes/hero.service';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  a = inject(Service);
  ngOnInit() {
    this.a.get().subscribe((result) => {
      console.log(result);
    });
  }
}
