import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    const hours: number = Math.floor(minutes / 60);

    return hours + ':' + minutes + ':' + (value - minutes * 60);
  }
}
