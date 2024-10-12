import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/ui/header/header.component';
import { AnchorComponent } from '../../components/common/anchor/anchor.component';
import { WrapperAnchorComponent } from '../../components/common/wrapper-anchor/wrapper-anchor.component';
import { FooterComponent } from '../../components/ui/footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AnchorComponent,
    WrapperAnchorComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
})
export class MainLayoutModule { }
