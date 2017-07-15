import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {

  allTheQuotes: object[]=[
     {
      text: 'You can discover everything you need to know about everything by looking at your hands',
      author: 'Jayden Smith'
    },
    {
      text: 'Anyone who has never made a mistake has never tried anything new',
      author: 'Albert Einstein'
    },
    {
      text: 'If a book store new runs out of a certain book, dose that mean that nobody reads it, or everybody reads it',
      author: 'Jayden Smith'
    },
    {
      text: 'Today is the first day of what every you want',
      author: " Dont know",
    },
    {
      text: 'Prefiero morir antes que perder la vida',
      author: 'Osquitar'
    },

  ]

  constructor() { }

  ngOnInit() {
  }

  doSomething(theQuote){
    const quoteIndex = this.allTheQuotes.indexOf(theQuote);
    this.allTheQuotes.splice(quoteIndex, 1);
  }

}
