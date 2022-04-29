import { Component, OnInit } from '@angular/core';
import { SpecialOfferService } from 'src/services/special-offer.service';
import { SpecialOffer } from 'src/shared/model/special-offer.model';

@Component({
  selector: 'special-offers',
  templateUrl: './special-offers.component.html',
  styleUrls: ['./special-offers.component.scss']
})
export class SpecialOffersComponent implements OnInit {
  specialOffers: SpecialOffer[];
  constructor(private specialOfferService: SpecialOfferService) {
  }

  ngOnInit() {
    this.getSpecialOffers();
  }
  async getSpecialOffers() {
    await this.specialOfferService.getSpecialOfferForFront().subscribe(data => {
      this.specialOffers = data;
      this.specialOffers.forEach(offer => {
        this.loadSpecialOfferImages(offer.id);
      });
    });
  }


  async loadSpecialOfferImages(spoId) {
    await this.specialOfferService.getSpecialOfferImageUrls(spoId).subscribe(
      data => {
        if (data.length) {
          const spoImagesUrl = [];
          data.forEach(element => {
            let url = this.specialOfferService.imageUrl + element;
            spoImagesUrl.push(url);
          });
          // console.log(packageImagesUrl);
          this.specialOffers.find(
            r => r.id === spoId
          ).imagePaths = spoImagesUrl;
        } else {
          this.specialOffers.splice(
            this.specialOffers.findIndex(p => p.id == spoId),
            1
          );
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
