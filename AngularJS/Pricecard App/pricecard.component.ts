import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-pricecard',
  templateUrl: './pricecard.component.html',
  styleUrls: ['./pricecard.component.css']
})
export class PricecardComponent implements OnInit {
   @Input() cardData;
  constructor() { }

  ngOnInit(): void {
  }

}
