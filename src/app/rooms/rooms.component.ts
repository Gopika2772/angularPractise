import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms'
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  hotelName = 'hilon';
  numberOfRooms = 10;
  hideRooms = false;
  rooms: Room = {
    // totalRooms: 20,
    // availableRooms: 50,
    // bookedRooms: 5
  };

  roomList: RoomList[] = [{
    roomType: 'Deluxe',
    amenities: 'tv',
    price: 500,
    photos: 'www.google.com',
    checkinTime: new Date('11-Nov-2022'),
    checoutTime: new Date('12-Nov-2022')

  },
  {
    roomType: 'Deluxe',
    amenities: 'tv',
    price: 100,
    photos: 'www.google.com',
    checkinTime: new Date('13-Nov-2022'),
    checoutTime: new Date('14-Nov-2022')

  },
  {
    roomType: 'Deluxe',
    amenities: 'tv',
    price: 200,
    photos: 'www.google.com',
    checkinTime: new Date('15-Nov-2022'),
    checoutTime: new Date('16-Nov-2022')

  }]

  constructor() { }
  ngOnInit(): void { }
  toggle() {
    this.hideRooms = !this.hideRooms;

  }
}
