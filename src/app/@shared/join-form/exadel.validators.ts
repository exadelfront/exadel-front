import {FormControl} from '@angular/forms';

export class ExadelValidators {

  static restrictedFileTypes(control: FormControl): { [key: string]: boolean } {
    if (/.pdf$/.test(control.value) || /.doc$/.test(control.value) || /.docx$/.test(control.value) || /.png$/.test(control.value)) {
      return null;
    } else {
      return {restrictedFileTypes: true};
    }
  }

  static fileSizeValidator(control: FormControl): { [key: string]: boolean } {
    const file = control.value;
    // const fileSize = control.files[0];
    if (file) {
      // console.log(document.getElementById('file-input'));
      // fRead.readAsDataURL(file.files[0]);
    }


    // const file = document.getElementById('file-input').files[0];
    /*
    const fileSizeInKB = Math.round(fileSize / 1024);
    if (file && fileSizeInKB >= 19) {
        return {fileSizeValidator: true};
    }
     */
    return null;
  }


  static restrictedGitHubLink(control: FormControl): { [key: string]: boolean } {
    if (/^https:\/\/github.com\//.test(control.value) || /^http:\/\/github.com\//.test(control.value)) {
      return null;
    } else {
      return {restrictedGitHubLink: true};
    }
  }

}
