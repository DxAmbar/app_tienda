import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateStringPicture'
})
export class TruncateStringPicturePipe implements PipeTransform {

  transform(value: string, length: number, symbol: string): string {
    value = value.substring(0,10);
    return value + symbol;
  }

}
