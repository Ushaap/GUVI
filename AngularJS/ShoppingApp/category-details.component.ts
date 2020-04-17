import { Component, OnInit ,Input} from '@angular/core';
import {ActivatedRoute,Router,ParamMap} from '@angular/router'

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {
 @Input() productdetails;
 category;
 
 constructor(private activatedroute:ActivatedRoute) {
}

ngOnInit(): void {
 this.activatedroute.paramMap.subscribe((params: ParamMap) => {
   this.category = this.activatedroute.snapshot.params.id
 });

}

}
