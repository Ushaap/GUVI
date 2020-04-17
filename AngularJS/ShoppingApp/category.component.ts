import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  name;
  constructor() { }

  ngOnInit(): void {
  }
  proddetails=[
    
    {
      id:"clothing1",
      category:"clothing",
      name:"Skirt",
      price : "INR 2000",
      imgsrc:"http://placehold.it/700x400",
      description: "Color: Red Material: Crepe Occasion: Ceremony Wash care: Hand wash with cold water, Wash dark colors separately, Do not bleach, Dip dry away from direct heat, Steam iron only!"
    },
    {
      id:"clothing2",
      category:"clothing",
      name:"Tops",
      price : "INR 1000",
      imgsrc:"http://placehold.it/700x400",
      description: "Material: Crepe Occasion: Ceremony Wash care: Hand wash with cold water, Wash dark colors separately, Do not bleach, Dip dry away from direct heat, Steam iron only!"
    },
    {
      id:"clothing3",
      category:"clothing",
      name:"Ethnic",
      price : "INR 3000",
      imgsrc:"http://placehold.it/700x400",
      description: "Color: Pastel Material: Crepe Occasion: Ceremony Wash care: Hand wash with cold water, Wash dark colors separately, Do not bleach, Dip dry away from direct heat, Steam iron only!"
    },
   
    {
      id:"footwear1",
      name:"Sandals",
      category:"footwear",
      price : "INR 800",
      imgsrc:"http://placehold.it/700x400",
      description: "Sandals that are sure to tempt you to climb up a tree, dance in the rain, and scream at the top of your lungs. Let them bring out the child in you!"
    },
    {
      id:"footwear2",
      name:"Wedges",
      category:"footwear",
      price : "INR 1200",
      imgsrc:"http://placehold.it/700x400",
      description: "Classy and chic! Moonlight will not only accompany you on fancy dinners, but also on the dance floor!"
    },
    {
      id:"footwear3",
      name:"Heels",
      category:"footwear",
      price : "INR 2500",
      imgsrc:"http://placehold.it/700x400",
      description: "Classy and chic! Moonlight will not only accompany you on fancy dinners, but also on the dance floor!"
    }
  ]
}
