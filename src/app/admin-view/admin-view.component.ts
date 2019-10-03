import { Component, OnInit } from '@angular/core';
import { VedioService} from '../vedio.service';
import {Vedio} from '../vedio';
import { Input} from '@angular/core';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css'],
  providers: [VedioService]
})
export class AdminViewComponent implements OnInit {
  vedios: Array<Vedio>;
  selectedVedio: Vedio;
  @Input()
  Adminvedio: Vedio;
private hideVedioList: boolean = true;
  constructor(private _vedioService: VedioService) {
  }
  ngOnInit() {
  }
  onUpdateVedioEvent(vedio: any) {
    this._vedioService.updateVedio(vedio)
      .subscribe(resUpdatedVedio => vedio = resUpdatedVedio);
    this.selectedVedio = null;
  }

  onDeleteVedioEvent(vedio: any) {
    let vedioArray = this.vedios;
    this._vedioService.deleteVedio(vedio)
      .subscribe(resDeletedVedio => {
        for (let i = 0; i < vedioArray.length; i++) {
          if (vedioArray[i]._id === vedio._id) {
            vedioArray.splice(i, 1);
          }
        }
      });
    this.selectedVedio = null;
  }

}
