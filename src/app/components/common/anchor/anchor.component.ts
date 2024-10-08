import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anchor',
  standalone: true,
  imports: [],
  templateUrl: './anchor.component.html',
  styleUrl: './anchor.component.css'
})
export class AnchorComponent {
  @Input() text: string = 'Click Me';
  @Input() path: string = '/';

  constructor(private router: Router) { }

  navigate() {
    this.router.navigate([this.path]);
  }
}
