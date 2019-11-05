import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {


  transform(items: any[], property: string, searchText: string, isStrict: boolean): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      if (isStrict) {
        return it[property].toLowerCase() === searchText;
      } else {
        return it[property].toLowerCase().includes(searchText);
      }
    });
  }
}
