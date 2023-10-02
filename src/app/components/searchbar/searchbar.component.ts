import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements OnInit {
  @Output() onSearch = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  onSearchChange(e: any) {
    const searchedItem = e.detail.value as string;
    this.onSearch.emit(searchedItem.trim().toLowerCase());
  }
}
