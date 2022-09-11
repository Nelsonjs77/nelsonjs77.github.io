import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achivements-and-certificates',
  templateUrl: './achivements-and-certificates.component.html',
  styleUrls: ['./achivements-and-certificates.component.css']
})
export class AchivementsAndCertificatesComponent implements OnInit {

  achivements : Array<any> = [];
  
  constructor() { }


  ngOnInit(): void {

    let ach1={
      titulo : "Certificado de preparatoria COBAEV 12",
      fecha : "(2017)",
      descripsion : "Certificado de preparatoria concluida "
    }

    let ach2={
      titulo : "Certificado de turismo COBAEV 12",
      fecha : "(2017)",
      descripsion : "Certificacion en servicios turiticos de la region de Córdoba veracruz"
    }


    this.achivements.push(ach1);
    this.achivements.push(ach2);




  }

}
