import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appendCLI'
})

export class AppendCLIPipe implements PipeTransform {
  transform(value: string, ...args: any): string {
    return `City Name: ${value}`;
  }
}
