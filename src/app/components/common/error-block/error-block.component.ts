import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-block',
  standalone: true,
  imports: [],
  templateUrl: './error-block.component.html',
  styleUrl: './error-block.component.css'
})
export class ErrorBlockComponent {
  @Input() error: string | null = null;
}
