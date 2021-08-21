export class HotelListItem  {
  id : string;
  title : string;
  location : string;
  description : string;

  constructor(id : string, title: string, location: string, description: string) {
    this.id  = id;
    this.title = title;
    this.location  = location;
    this.description  = description;
  }
}
