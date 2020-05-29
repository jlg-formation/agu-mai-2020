import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): unknown {
    const minutes = ('' + Math.floor(value / 60)).padStart(2, '0');
    const seconds = ('' + (value % 60)).padStart(2, '0');
    return `${minutes}:${seconds}`;
  }
}
