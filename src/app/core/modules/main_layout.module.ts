import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/ui/header/header.component';
import { AnchorComponent } from '../../components/common/anchor/anchor.component';
import { WrapperAnchorComponent } from '../../components/common/wrapper-anchor/wrapper-anchor.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    AnchorComponent,
    WrapperAnchorComponent
  ],
  exports: [
    HeaderComponent,
  ],
})
export class MainLayoutModule { }
