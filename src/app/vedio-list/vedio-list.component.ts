import { Component, OnInit, EventEmitter } from '@angular/core';
import {Vedio} from '../vedio';
@Component({
  selector: 'vedio-list',
  templateUrl: './vedio-list.component.html',
  styleUrls: ['./vedio-list.component.css'],
  inputs : ['vedios'],
  outputs: ['SelectVedio']

})
export class VedioListComponent implements OnInit {
public  SelectVedio =  new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onSelect(vid: Vedio) {
    this.SelectVedio.emit(vid);
  }
}
