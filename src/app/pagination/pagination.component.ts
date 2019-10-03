import {Component, OnInit, OnChanges} from '@angular/core';
import {Input} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/range';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/toArray';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})

export class PaginationComponent implements OnInit, OnChanges {
  // default values
  @Input() offset: number = 0; // The offset that is used currently
  @Input() limit: number = 1; // The limit of size of each page
  @Input() size: number = 1; // the no of records in collection
  @Input() range: number = 3; // the range from the current page back and forth
  pages: Observable<number[]>;
  currentPage: number;
  totalPages: number;

  constructor() {
  }

  ngOnInit() {
    this.getPages(this.offset, this.limit, this.size);
  }

  ngOnChanges() {
    this.getPages(this.offset, this.limit, this.size);
  }

  getPages(offset: number, limit: number, size: number) { // get the no of pages by the server
    this.currentPage = this.getCurrentPage(offset, limit);
    this.totalPages = this.getTotalPages(limit, size);
     this.pages = Observable.range(-this.range, this.range * 2 + 1)
      .map(offset => this.currentPage + offset)
      .filter(page => this.isValidPageNumber(page, this.totalPages))
      .toArray(); // returns page array
  }

  getCurrentPage(offset: number, limit: number): number {
    return Math.floor(offset / limit) + 1; // get the lower limit
  }

  getTotalPages(size: number, limit: number): number {
    return Math.ceil(Math.max(size, 1) / Math.max(limit, 1)); // get the upper limit
  }

  isValidPageNumber(page: number, totalPages: number): boolean {
    return page > 0 && page <= totalPages; // checks the validity of the page number calculated by the range
  }
  isOnOrder(){

  }

}
