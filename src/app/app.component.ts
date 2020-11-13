import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  count: number = 0;
  counter: any;

  public start(): void {
    this.counter = setInterval(() => {
      this.count += 1;
    }, 1000);
  }

  public stop(): void {
     clearInterval(this.counter);
     this._resetCounter();
  }

  public wait(): void {
    clearInterval(this.counter);
  }

  public reset(): void {
    this.stop();
    this.start();
  }

  private _resetCounter(): void {
    this.count = 0;
  }
}
