import { Component } from '@angular/core';
import { MainLayoutModule } from '../../core/modules/main-layout.module';
import { SignInModule } from '../../core/modules/sign-in.module';

@Component({
  selector: 'app-sign-in-page',
  standalone: true,
  imports: [
    MainLayoutModule,
    SignInModule
  ],
  templateUrl: './sign-in-page.component.html',
  styleUrl: './sign-in-page.component.css'
})
export class SignInPageComponent {

}
