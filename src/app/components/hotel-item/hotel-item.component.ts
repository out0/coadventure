import { ImageService } from './../../services/image.service';
import { HotelListItem } from './../../model/hotel_list_item';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-hotel-item',
  templateUrl: './hotel-item.component.html',
  styleUrls: ['./hotel-item.component.css']
})
export class HotelItemComponent implements OnInit {

  @Input() listItem: HotelListItem = new HotelListItem("0", "", "", "");

  hotelListImage: any;
  isImageLoading: boolean = false;

  constructor(private imageService: ImageService) {

  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.hotelListImage = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }

  getImageFromService() {
    this.isImageLoading = true;
    this.imageService.getHotelListImage(this.listItem.id).subscribe(data => {
      this.createImageFromBlob(data);
      this.isImageLoading = false;
    }, error => {
      this.isImageLoading = false;
      console.log(error);
    });
  }

  ngOnInit(): void {
    this.getImageFromService();
  }

}
