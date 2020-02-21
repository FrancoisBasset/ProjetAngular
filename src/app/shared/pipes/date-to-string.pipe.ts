import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateToString'
})
export class DateToStringPipe extends DatePipe implements PipeTransform {

  transform(value: Date): string {
    return super.transform(value, 'dd MMMM yyyy hh:mm');
  }

}
