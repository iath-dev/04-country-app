import { DatePipe } from '@angular/common';
import { Component, input, OnDestroy } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, shareReplay, timer } from 'rxjs';

@Component({
  selector: 'clock-stat',
  imports: [DatePipe],
  templateUrl: './clock-stat.component.html',
})
export class ClockStatComponent {
  timezone = input.required<string>();
  timer$ = toSignal(
    timer(0, 1000).pipe(
      map(() => new Date()),
      shareReplay(1)
    )
  );
}
