import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe1'
})
export class CustomPipe1Pipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return value * 10
  }
}
