import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StopWatchComponent } from '../components/main-page/task/stop-watch/stop-watch.component';

@Injectable({
  providedIn: 'root'
})
export class DispatcherService {

  totalTime = new BehaviorSubject(0);
  playing = new BehaviorSubject(false);

  constructor() { }

  updateTotalTime(value: number) {
    this.totalTime.next(this.totalTime.getValue()+value); 
  }

  // playing stop watch actions

  startPlaying() {
    this.playing.next(true);
  }

  stopPlaying() {
    this.playing.next(false);
  }

  getPlayingStatus() {
    return this.playing.getValue()
  }
}
