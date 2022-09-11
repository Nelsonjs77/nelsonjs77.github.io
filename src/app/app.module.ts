import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';

import { EducationComponent } from './education/education.component';

import { SkillsAndCompetencesComponent } from './skills-and-competences/skills-and-competences.component';
import { AchivementsAndCertificatesComponent } from './achivements-and-certificates/achivements-and-certificates.component';
import { LanguagesComponent } from './languages/languages.component';
import { InterestesComponent } from './interestes/interestes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorkExperienceComponent,

    EducationComponent,
    
    SkillsAndCompetencesComponent,
    AchivementsAndCertificatesComponent,
    LanguagesComponent,
    InterestesComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
