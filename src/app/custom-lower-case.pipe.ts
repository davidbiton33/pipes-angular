import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customLowerCase'
})

export class CustomLowerCasePipe implements PipeTransform {

  transform(str:string, ...args: any[]): any {
    // return str.toLowerCase();
  // console.log(...args);
  return str.toString().split("/").join("_");



  }

}
