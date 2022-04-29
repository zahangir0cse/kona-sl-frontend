import { Component } from '@angular/core';
import { Package } from 'src/shared/model/package.model';
import { PackageService } from 'src/services/package.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent {
  packages: Package[];
  location;
  constructor(private packageService: PackageService) {
    this.getPackageForUser();
  }

  async getPackageForUser(place: string = null) {
    this.location = place;
    await this.packageService.get3PackagesForFront(place).subscribe(data => {
      this.packages = data;
      this.packages.forEach(pak => {
        this.loadPackageImages(pak.id);
      });
    });
  }

  async loadPackageImages(packageId) {
    await this.packageService.getPackageImageUrls(packageId).subscribe(
      data => {
        if (data.length) {
          const packageImagesUrl = [];
          data.forEach(element => {
            let url = this.packageService.imageUrl + element;
            packageImagesUrl.push(url);
          });
          // console.log(packageImagesUrl);
          this.packages.find(
            r => r.id === packageId
          ).imagePaths = packageImagesUrl;
        } else {
          this.packages.splice(
            this.packages.findIndex(p => p.id == packageId),
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
