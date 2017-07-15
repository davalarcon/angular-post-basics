import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  allTheContacts: any[] =[
    {
      id: 42,
      name: 'Andromeda Gonzales',
      notes: 'Weird name from Refresh Miami'
    },
    {
      id: 100,
      name: 'Arcann Fromstarwars',
      notes: 'Met at Cosplayer from Supercon'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
