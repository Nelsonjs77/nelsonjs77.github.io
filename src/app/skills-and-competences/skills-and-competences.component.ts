import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-and-competences',
  templateUrl: './skills-and-competences.component.html',
  styleUrls: ['./skills-and-competences.component.css']
})
export class SkillsAndCompetencesComponent implements OnInit {

  skillsAndCompetences : Array<any> = [];

  constructor() { }

  ngOnInit(): void {

    let skill1 ={
      habilidad : "Programar",
      porcentaje : "50%"
    }

   let skill2 ={
      habilidad : "Redes",
      porcentaje : "30%"
    }

    let skill3 ={
      habilidad : "creatividad",
      porcentaje : "40%"
    }

    let skill4 ={
      habilidad : "Trabajo en equipo",
      porcentaje : "70%"
    }

    let skill5 ={
      habilidad : "Trabajo conceptual",
      porcentaje : "60%"
    }

    this.skillsAndCompetences.push(skill1);
    this.skillsAndCompetences.push(skill2);
    this.skillsAndCompetences.push(skill3);
    this.skillsAndCompetences.push(skill4);
    this.skillsAndCompetences.push(skill5);



  }

}
