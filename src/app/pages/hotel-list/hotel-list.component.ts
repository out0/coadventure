import { Component, OnInit } from '@angular/core';
import { HotelListItem } from 'src/app/model/hotel_list_item';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  hotelList : HotelListItem[];

  constructor() {
    this.hotelList = [];
    this.hotelList.push(new HotelListItem("1", "Bungallo Heaven", "Mahe, Seychelles", "A 100m da praia. Próximo a supermercado. Fácil acesso ao aeroporto via táxi."));
    this.hotelList.push(new HotelListItem("1", "Bungallo Heaven", "Mahe, Seychelles", "A 100m da praia. Próximo a supermercado. Fácil acesso ao aeroporto via táxi."));
   /* this.hotelList.push(new HotelListItem("1", "Bungallo Heaven", "Mahe, Seychelles", "A 100m da praia. Próximo a supermercado. Fácil acesso ao aeroporto via táxi."));
    this.hotelList.push(new HotelListItem("1", "Bungallo Heaven", "Mahe, Seychelles", "A 100m da praia. Próximo a supermercado. Fácil acesso ao aeroporto via táxi."));
    this.hotelList.push(new HotelListItem("1", "Bungallo Heaven", "Mahe, Seychelles", "A 100m da praia. Próximo a supermercado. Fácil acesso ao aeroporto via táxi."));
    this.hotelList.push(new HotelListItem("1", "Bungallo Heaven", "Mahe, Seychelles", "A 100m da praia. Próximo a supermercado. Fácil acesso ao aeroporto via táxi."));
    this.hotelList.push(new HotelListItem("1", "Bungallo Heaven", "Mahe, Seychelles", "A 100m da praia. Próximo a supermercado. Fácil acesso ao aeroporto via táxi."));
    this.hotelList.push(new HotelListItem("1", "Bungallo Heaven", "Mahe, Seychelles", "A 100m da praia. Próximo a supermercado. Fácil acesso ao aeroporto via táxi."));*/
  }

  ngOnInit(): void {
  }

}
