import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salary',
  standalone: true
})
export class SalaryPipe implements PipeTransform {
  transform(lower: number, higher: number): string {
    return `${lower} - ${higher} $`;
  }
}
