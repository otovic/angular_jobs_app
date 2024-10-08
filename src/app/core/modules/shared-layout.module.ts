import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from '../../components/ui/header/header.component';

@NgModule({
  imports: [
    HeaderComponent,
    CommonModule,
    MatToolbarModule,
  ],
  exports: [
    HeaderComponent,
    MatToolbarModule,
  ],
})
export class SharedLayoutModule { }
