export class UserProfile {
  name : string;
  family_adults : number;
  family_teenagers : number;
  family_children : number;
  family_toodlers : number;
  family_elders : number;

  constructor () {
    this.name = "";
    this.family_adults = 0;
    this.family_teenagers = 0;
    this.family_children = 0;
    this.family_toodlers = 0;
    this.family_elders = 0;
  }
}
