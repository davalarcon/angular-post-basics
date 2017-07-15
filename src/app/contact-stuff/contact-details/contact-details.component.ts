import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//we need this to retrive from "contact-list". it lets us access the URL params.

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  myContactId: number;

  constructor(
    private routeThang: ActivatedRoute
  ) { }

  ngOnInit() {
    this.routeThang.params.subscribe((actualParams)=>{
      this.myContactId = actualParams.myId;
    })
  }



}
