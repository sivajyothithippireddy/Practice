import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeone'
})
export class PipeonePipe implements PipeTransform {
  transform(value: any, searchBy): any {
    {
      if (!searchBy) {
        return value;
      }
      return value.filter(af => af.title.toLowerCase().startsWith(searchBy.toLowerCase()));
    }
  }
}
