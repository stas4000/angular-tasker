import { Component, OnInit, Input } from '@angular/core';
import { StopWatchComponent } from './stop-watch/stop-watch.component';
import { DispatcherService } from 'src/app/services/dispatcher.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() title:string;

  constructor(
    private dispatcher: DispatcherService
  ) { }

  ngOnInit() {
  }

  play(watch: StopWatchComponent) {
    if (!this.dispatcher.getPlayingStatus()) {
      watch.startTimer();
      this.dispatcher.startPlaying();
    }
  }

  pause(watch: StopWatchComponent) {
    if (watch.isPlaying) {
      watch.pauseTimer();
      this.dispatcher.stopPlaying();
    }
  }

}