import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarsComponent } from './navs/horizontal-nav-bar/horizontal-nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [NavBarsComponent, FooterComponent],
  imports: [CommonModule, NgbModule],
  exports: [NavBarsComponent, FooterComponent],
})
export class CoreModule {}
