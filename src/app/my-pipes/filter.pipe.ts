import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterTxt:string, propertyName:string ): any {
    if(value.length === 0 || filterTxt === '')
    {
      return value;
    }
    const resultArray = [];
    for(const element of value)
    {
      if(element[propertyName] === filterTxt)
      {
        resultArray.push(element);
      }
    }
    return resultArray;
  }

}
