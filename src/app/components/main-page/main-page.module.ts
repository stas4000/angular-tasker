import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { StopWatchComponent } from './task/stop-watch/stop-watch.component';
import { TaskComponent } from './task/task.component';
import { DispatcherService } from 'src/app/services/dispatcher.service';
import { ToolsService } from 'src/app/services/tools.service';


@NgModule({
  declarations: [MainPageComponent, StopWatchComponent, TaskComponent],
  imports: [
    CommonModule
  ],
  providers: [DispatcherService, ToolsService],
})
export class MainPageModule { }
