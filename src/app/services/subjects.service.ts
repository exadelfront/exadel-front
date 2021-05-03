import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SUBJECTS_URL } from '../../environments/environment';

interface Subject {
  name: string;
  isSelected: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  // allSubjects: string[] = [
  //   'Java', 'macos', 'ubuntu', 'ansible', 'ssh', 'raspberry-pi',
  //   'terminal', 'vim', 'raspberry-pi3', 'subprocess', 'environment-variables',
  //   'centos', 'console', 'command-line-interface', 'pipe', 'arguments', 'jq',
  //   'homebrew', 'iot', 'applescript', 'printf', 'escaping', 'sftp', 'windows-subsystem-for-linux',
  //   'raspbian'
  // ];
  allSubjectsObjs: Subject[] = [];
  selectedSubjectsNames: string[] = [];

  constructor(private http: HttpClient) {
    // this.allSubjectsObjs = this.allSubjects.map(subject => {
    //   return { name: subject, isSelected: false };
    // });
    this.http.get<string[]>(SUBJECTS_URL).subscribe(subjectsNames => {
      this.allSubjectsObjs = subjectsNames.map(subjectName => {
        return {name: subjectName, isSelected: false};
      });

    });
  }

  onSubjectClick(event: MouseEvent): void {
    const selectedSubjectName = (event.target as HTMLElement).innerText;
    this.allSubjectsObjs = this.allSubjectsObjs.slice();
    const selectedSubjectObj = this.allSubjectsObjs
      .find(subjectObj => subjectObj.name === selectedSubjectName);
    selectedSubjectObj.isSelected = !selectedSubjectObj.isSelected;
    this.updateSelectedSubjects(selectedSubjectObj);
  }

  updateSelectedSubjects(subject: Subject): void {
    if (subject.isSelected) {
      this.selectedSubjectsNames.push(subject.name);
      return;
    }
    this.selectedSubjectsNames = this.selectedSubjectsNames
      .filter(selectedSubject => selectedSubject !== subject.name);
  }

  resetSelectedSubjects(): void {
    this.allSubjectsObjs.forEach(subject => subject.isSelected = false);
    this.selectedSubjectsNames = [];
  }
}
