import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'codeToString'
})
export class CodeToStringPipe implements PipeTransform {

  transform(value: string): string {
    return value.split('-').map(w => w.replace(/^./, w[0].toUpperCase())).join(' ');
  }

}
