import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "time",
})
export class TimePipe implements PipeTransform {
  transform(msValue: number): string {
    let milliseconds = (msValue % 1000) / 100;
    let seconds = Math.floor((msValue / 1000) % 60);
    let minutes = Math.floor((msValue / (1000 * 60)) % 60);

    return (
      this.addZero(minutes) + ":" + this.addZero(seconds) + "." + milliseconds
    );
  }

  private addZero(time: number): any {
    return time < 10 ? "0" + time : time;
  }
}
