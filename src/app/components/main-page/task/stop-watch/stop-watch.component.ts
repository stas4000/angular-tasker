import { 
  Component, 
  OnInit
 } from '@angular/core';
import { DispatcherService } from 'src/app/services/dispatcher.service';
import { ToolsService } from 'src/app/services/tools.service';
 

@Component({
  selector: 'app-stop-watch',
  templateUrl: './stop-watch.component.html',
  styleUrls: ['./stop-watch.component.scss'],
})
export class StopWatchComponent implements OnInit {

  constructor(
    private dispatcher: DispatcherService,
    private tools: ToolsService,
    ) { }

  seconds: number = 0;
  minutes: number = 0;
  time: string;
  interval: any;
  isPlaying: boolean;

  ngOnInit() {
    this.time = '00:00'
   }

  startTimer() {
    this.isPlaying = true;
    this.interval = setInterval(() => {
        this.seconds++;
        this.dispatcher.updateTotalTime(1);
        this.time = this.tools.calculateTime(this.seconds);
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
    this.isPlaying = false;
  }
}
