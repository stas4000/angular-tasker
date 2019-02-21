import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor() { }

  public calculateTime(sec_num: number) {
    let hours:any   = Math.floor(sec_num / 3600);
    let minutes:any = Math.floor((sec_num - (hours * 3600)) / 60);
    let seconds:any = sec_num - (hours * 3600) - (minutes * 60);

    if (minutes < 10) {minutes = "0"+minutes.toString();}
    if (seconds < 10) {seconds = "0"+seconds.toString();}
    return minutes+':'+seconds;
  }
  
}
