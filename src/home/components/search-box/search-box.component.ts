import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {
  formNumber = 1;
  hotelSearch;
  shipSearch;
  constructor(private router: Router) { }

  setFormNumber(n: number) {
    this.formNumber = n;
  }

  searchHotel() {
    this.router.navigate(['/hotels/search'], {
      queryParams: { query: this.hotelSearch }
    });
  }

  searchShip() {
    this.router.navigate(['/ships'], {
      queryParams: { query: this.shipSearch }
    });
  }
}
