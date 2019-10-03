import {Component, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'vedio-detail',
  templateUrl: './vedio-detail.component.html',
  styleUrls: ['./vedio-detail.component.css'],
  inputs: ['vedio'],
  outputs: ['updateVedioEvent', 'deleteVedioEvent']
})


export class VedioDetailComponent implements OnInit {
  vedio: any;
  private editTitle: boolean = false;
  private updateVedioEvent = new EventEmitter();
  private deleteVedioEvent = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.editTitle = false;
  }

  onTitleClick() {
    this.editTitle = true;
  }

  updateVedio() {
    this.updateVedioEvent.emit(this.vedio);
  }

  deleteVedio() {
    this.deleteVedioEvent.emit(this.vedio);
  }
}
