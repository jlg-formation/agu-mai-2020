import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): unknown {
    console.log('value: ', value);
    const minutes = ('' + Math.floor(value / 60)).padStart(2, '0');
    console.log('minutes: ', minutes);
    const seconds = ('' + (value % 60)).padStart(2, '0');
    return `${minutes}:${seconds}`;
  }
}
