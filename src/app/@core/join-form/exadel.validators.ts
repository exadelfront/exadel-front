import { FormControl } from "@angular/forms";

export class ExadelValidators {

    static restrictedFileTypes(control: FormControl): {[key: string]: boolean} {
       if(/.pdf$/.test(control.value) || /.doc$/.test(control.value) || /.docx$/.test(control.value) || /.png$/.test(control.value)){
             return null
        } else {
            return {restrictedFileTypes: true}
        }
    }


    // static fileMaxSize(maxSize: number): ValidatorFn {
    //     const validatorFn = (file: File) => {
    //       if (file instanceof File && file.size > maxSize) {
    //         return { fileMinSize: { requiredSize: maxSize, actualSize: file.size, file } };
    //       }
    //     };
    //     return FileValidator.fileValidation(validatorFn);
    //   }
    

    static fileSizeValidator(control: FormControl): {[key: string]: boolean} {
        const file = control.value;
        console.log(control, file)
              
        if (file) {
            const path = file.replace(/^.*[\\\/]/, "");
            // const fileSize = size; 
            // console.log(fileSize) 
            // const fileSizeInKB = Math.round(fileSize / 1024);
            // if (fileSizeInKB >= 19) {
              return {fileSizeValidator: true}
            } else {
              return null;
            }
        //   }
          return null;
    }
    


    static restrictedGitHubLink(control: FormControl): {[key: string]: boolean} {
        if(/^https:\/\/github.com\//.test(control.value) || /^http:\/\/github.com\//.test(control.value)){
              return null
         } else {
             return {restrictedGitHubLink: true}
         }
    }

}