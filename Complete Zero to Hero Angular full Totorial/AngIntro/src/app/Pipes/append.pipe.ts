import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'append'
})

export class AppendPipe implements PipeTransform {
  transform(value: string, args?: any): string {
    return `City Name: ${value}`;
  }
}
