import { Component, OnInit } from '@angular/core';
import {Vedio} from '../vedio';
import {VedioService} from '../vedio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css'],
  providers: [VedioService]
})
export class AdminPageComponent implements OnInit {
  vedios: Array<Vedio>;
  selectedVedio: Vedio;

  constructor(private _vedioService: VedioService, private route: Router) {
  }

  ngOnInit() {
    this._vedioService.getAdminVedios()
      .subscribe(resVedioData => this.vedios = resVedioData);
  }

  onClick() {
    this.route.navigateByUrl('/vedios');
  }
}
