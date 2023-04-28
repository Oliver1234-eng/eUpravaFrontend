import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'orderBy' })
export class OrderByPipe implements PipeTransform {
  transform(value: any[], field: string, direction: 'asc' | 'desc'): any[] {
    if (!value || !field || !direction) {
      return value;
    }

    const isAsc = direction === 'asc';

    return value.sort((a, b) => {
      if (a[field] < b[field]) {
        return isAsc ? -1 : 1;
      } else if (a[field] > b[field]) {
        return isAsc ? 1 : -1;
      } else {
        return 0;
      }
    });
  }
}