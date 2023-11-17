import {
  Component,
  TemplateRef,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { Router } from '@angular/router';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-horizontal-nav-bar',
  templateUrl: './horizontal-nav-bar.component.html',
  styleUrls: ['./horizontal-nav-bar.component.scss'],
})
export class NavBarsComponent {
  private _router = inject(Router);
  closeResult: string | any;

  constructor(private offcanvasService: NgbOffcanvas) {}

  openEnd(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'end' });
  }
}
