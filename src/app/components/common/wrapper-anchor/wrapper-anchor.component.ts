import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wrapper-anchor',
  standalone: true,
  imports: [],
  templateUrl: './wrapper-anchor.component.html',
  styleUrl: './wrapper-anchor.component.css'
})
export class WrapperAnchorComponent {
  @Input() path: string = '/';

  constructor(private router: Router) { }

  navigate() {
    this.router.navigate([this.path]);
  }
}
