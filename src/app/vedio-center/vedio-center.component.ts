import {Component, OnInit} from '@angular/core';
import {Vedio} from '../vedio';
import {VedioService} from '../vedio.service';


@Component({
  selector: 'app-vedio-center',
  templateUrl: './vedio-center.component.html',
  styleUrls: ['./vedio-center.component.css'],
  providers: [VedioService]
})
export class VedioCenterComponent implements OnInit {
  vedios: Array<Vedio>;
  selectedVedio: Vedio;
  private hideNewVedio: boolean = true;

  constructor(private _vedioService: VedioService) {
  }

  ngOnInit() {
    this._vedioService.getVedios()
      .subscribe(resVedioData => this.vedios = resVedioData);
  }


  onSelectVedio(vedio: any) {
    this.selectedVedio = vedio;
    console.log(this.selectedVedio);
    this.hideNewVedio = true;
  }

  onSubmitAddVedio(vedio: Vedio) {
    this._vedioService.addVedio(vedio)
      .subscribe(resNewVedio => {
        this.hideNewVedio = true;
        this.vedios.push(resNewVedio);
        this.selectedVedio = resNewVedio;
      });
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

  newVedio() {
    this.hideNewVedio = false;
  }

}
