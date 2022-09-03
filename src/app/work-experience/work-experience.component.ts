import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  workExperience : Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    let work1 = {
      fecha: "2018-2019",
      ubicacion: "Cordoba Ver.",
      puesto: "Chalan",
      empresa: "Mundo Animal",
      logros:[
        {descripcion: "Ningun bulto de alimentos roto"},
        {descripcion: "Puntualidad"}
      ]
    };

    let work2 = {
      fecha: "2014-2017",
      ubicacion: "Amegacure",
      puesto: "Dios",
      empresa: "AKATSUKI",
      logros:[
        {descripcion: "Derrotar a Hanzo de la zalamandra"},
        {descripcion: "invocar al gedo mazo"}
      ]
    };

    let work3 = {
      fecha: "2019-2020",
      ubicacion: "Cordoba Ver.",
      puesto: "Multifuncional",
      empresa: "OXXO",
      logros:[
        {descripcion: "Empeleado del mes"},
        {descripcion: "Mejor vendedor de gansitos"}
      ]
    };

    this.workExperience.push(work1);
    this.workExperience.push(work2);
    this.workExperience.push(work3);
  }

}
