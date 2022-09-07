import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  education : Array<any> = [];

  constructor() { }

  ngOnInit(): void {

    let edu1 = {
      fecha : "08/2014 - 08/2017",
      area : "Humanidades",
      institucion : "Colegio de Bachilleres del Estado de Veracruz - COBAEV 12",
    }

    this.education.push(edu1);







  }

}
